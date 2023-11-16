import { exit } from 'process';
import sqlite3 from 'sqlite3';
import fs from 'fs/promises';
import path from 'path'
import fsSync from 'fs';
import { generateRelationships } from './generateRelationships';
import { Entity, Relationship, Type, User } from '../types';
import { getClassesAndTypes } from './getClassesAndTypes';

const formatEntities = (entities: Entity[]): string => {
  return entities
    .map((e) => `('${e._id}', '${e.displayName}', '${e._class}', '${e._type}')`)
    .join(',\n');
};
const formatRelationships = (relationships: Relationship[]): string => {
  return relationships
    .map(
      (r) =>
        `('${r._id}', '${r.displayName}', '${r.fromEntityID}', '${r.toEntityID}', '${r.fromUserID}')`
    )
    .join(',\n');
};

const formatClasses = (classes: string[]): string => {
  return classes.map((c) => `('${c}')`).join(',\n');
};

const formatTypes = (types: Type[]): string => {
  return types
    .map((t) => `('${t.displayName}', '${t.parentClass}')`)
    .join(',\n');
};

// Format User data
const formatUsers = (users: User[]): string => {
  return users
    .map((t) => `('${t._id}', '${t.userName}')`)
    .join(',\n');
};

const exec = async () => {
  const entitiesRaw = await fs.readFile(path.resolve(__dirname, './entities.json'));
  const entities = JSON.parse(entitiesRaw.toString());
  const relationships = generateRelationships(entities);
  const { classes, types } = getClassesAndTypes(entities);

  // Ingest user data
  const usersRaw = await fs.readFile(path.resolve(__dirname, './users.json'));
  const users = JSON.parse(usersRaw.toString());

  const filepath = './jupiterone.db';

  if (fsSync.existsSync(filepath)) {
    await fs.unlink(filepath);
  }

  const db = new sqlite3.Database(filepath, (err) => {
    if (err) {
      console.error('ERROR:', err);
      exit(1);
    }
    console.log('DB connected');
  });

  db.get('PRAGMA foreign_keys = ON');

  // Add User table to db
  db.exec(`
create table entity (
  _id text primary key not null,
  displayName text not null,
  _class text not null,
  _type text not null
);

create table relationship (
  _id text primary key not null,
  displayName text not null,
  toEntityID text not null,
  fromEntityID text,
  fromUserID text
);

create table class (
  displayName text not null
);

create table type (
  displayName text not null,
  parentClass text not null
);

create table user (
  _id text primary key not null,
  userName text not null
);

insert into entity (
  _id, displayName, _class, _type
)
values
${formatEntities(entities)};

insert into relationship(
  _id, displayName, fromEntityID, toEntityID, fromUserID
)
values
${formatRelationships(relationships)};

insert into class(
  displayName
)
values
${formatClasses(classes)};

insert into user(
  _id, userName
)
values
${formatUsers(users)};

insert into type(
  displayName, parentClass
)
values
${formatTypes(types)};
`);

  const tables = ['entity', 'relationship', 'class', 'type', 'user'];

  tables.forEach((table) => {
    db.all(
      `
    select count(*) as ${table} from ${table};
  `,
      (_err, rows) => {
        rows.forEach((row, i) => {
          console.log(row);
        });
      }
    );
  });

  db.close((_err) => {
    console.log('DB closed');
  });
};
exec();
