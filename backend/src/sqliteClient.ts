import { rejects } from 'assert';
import { resolve } from 'path';
import sqlite3, { Database } from 'sqlite3';

// TODO: Improve this so that the exposed client methods don't need to each call the init and close DB functions
const initConnection = (): Promise<Database> => {
  return new Promise((resolve, reject) => {
    const filepath = `${__dirname}/../jupiterone.db`;
    const db = new sqlite3.Database(filepath, (err) => {
      if (err) {
        reject(err);
        return;
      }
    });
    resolve(db);
  });
};

const getRawClient = async (): Promise<Database> => {
  return initConnection();
};

const read = async <T>(
  tableName: string,
  id: string,
  primaryKeyName: string = '_id'
): Promise<T | null> => {
  const db = await initConnection();
  return new Promise(async (resolve, reject) => {
    db.all(
      `
      select * from ${tableName} where ${primaryKeyName} = '${id}';
    `,
      (err, rows) => {
        if (err) {
          reject(err);
          db.close();
        } else {
          resolve((rows?.[0] as T) || null);
          db.close();
        }
      }
    );
  });
};

const readAll = async <T>(tableName: string): Promise<T[]> => {
  const db = await initConnection();
  return new Promise(async (resolve, reject) => {
    db.all(
      `
      select * from ${tableName};
    `,
      (err, rows) => {
        if (err) {
          reject(err);
          db.close();
        } else {
          resolve(rows as T[]);
          db.close();
        }
      }
    );
  });
};

const readPage = async <T>(tableName: string, limit: number, offset: number): Promise<T[]> => {
  const db = await initConnection();
  return new Promise(async (resolve, reject) => {
    db.all(
      `
      SELECT * FROM ${tableName} LIMIT ? OFFSET ?;
    `,
      [limit, offset],
      (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows as T[]);
        }
        db.close();
      }
    );
  });
};

const readByFilter = async <T>(
  tableName: string,
  field: string,
  filter: string
): Promise<T[] | null> => {
  const db = await initConnection();
  return new Promise(async (resolve, reject) => {
    db.all(
      `
      SELECT * FROM ${tableName} WHERE ${field} = ?;
    `,
      [filter],
      (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows as T[]);
        }
        db.close();
      }
    );
  });
};

const readByFilters = async <T>(
  tableName: string,
  filters: (string | null | undefined)[]
): Promise<T[] | null> => {
  const db = await initConnection();

  return new Promise(async (resolve, reject) => {
    if (filters !== null) {
      const placeholders = filters.map(() => '?').join(', ');

      db.all(
        `
        SELECT * FROM ${tableName} WHERE _id IN (${placeholders});
      `,
        filters,
        (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows as T[]);
          }
          db.close();
        }
      );
    } else {
      // If filters is null or undefined, return null
      resolve(null);
      db.close();
    }
  });
};

const readByClass = async <T>(
  tableName: string,
  classValue: string
): Promise<T | null> => {
  const db = await initConnection();
  return new Promise(async (resolve, reject) => {
    db.all(
      `
      SELECT * FROM ${tableName} WHERE _class = ?;
    `,
      [classValue],
      (err, rows) => {
        if (err) {
          reject(err);
          db.close();
        } else {
          resolve((rows?.[0] as T) || null);
          db.close();
        }
      }
    );
  });
};

const readByType = async <T>(
  tableName: string,
  typeValue: string
): Promise<T | null> => {
  const db = await initConnection();
  return new Promise(async (resolve, reject) => {
    db.all(
      `
      SELECT * FROM ${tableName} WHERE _type = ?;
    `,
      [typeValue],
      (err, rows) => {
        if (err) {
          reject(err);
          db.close();
        } else {
          resolve((rows?.[0] as T) || null);
          db.close();
        }
      }
    );
  });
};

const create = async <T extends object>(
  tableName: string,
  item: T
): Promise<T> => {
  return new Promise(async (resolve, reject) => {
    const db = await initConnection();
    db.exec(
      `
  insert into ${tableName} (${Object.keys(item)
        .map((i) => `'${i}'`)
        .join(', ')})
  values (${Object.values(item)
    .map((v) => `'${v}'`)
    .join(', ')})
  `,
      (err) => {
        if (err) {
          reject(err);
          db.close();
        } else {
          resolve(item as T);
          db.close();
        }
      }
    );
  });
};

//TODO: improve types here to not use any

const update = async <T extends object>(
  tableName: string,
  item: T,
  primaryKeyName: string = '_id'
): Promise<T> => {
  return new Promise(async (resolve, reject) => {
    const db = await initConnection();
    const updates = Object.entries(item).filter(
      (entry) => entry[0] !== primaryKeyName
    );
    db.exec(
      `
  update ${tableName} set ${updates
        .map((u) => `${u[0]} = '${u[1]}'`)
        .join(`,\n`)}
      where ${primaryKeyName} = '${(item as any)[primaryKeyName]}';
  `,
      (err) => {
        if (err) {
          reject(err);
          db.close();
        } else {
          resolve(item as T);
          db.close();
        }
      }
    );
  });
};

const destroy = async <T>(
  tableName: string,
  id: string,
  primaryKeyName: string = '_id'
): Promise<null> => {
  const db = await initConnection();
  return new Promise(async (resolve, reject) => {
    db.all(
      `
      delete from ${tableName} where ${primaryKeyName} = '${id}';
    `,
      (err) => {
        if (err) {
          reject(err);
          db.close();
        } else {
          resolve(null);
          db.close();
        }
      }
    );
  });
};

export const sqliteClient = {
  read,
  readAll,
  readPage,
  readByClass,
  readByType,
  readByFilter,
  readByFilters,
  create,
  getRawClient,
  destroy,
  update,
};
