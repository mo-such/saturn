import { response } from 'express';
import { sqliteClient } from '../sqliteClient';
import { Relationship, NullablePartial } from '../types';
import { entityService } from '../entities/service';
import { v4 as uuid } from 'uuid';
const tableName = 'relationship';

export const getAllRelationships = async (): Promise<Relationship[]> => {
  return sqliteClient.readAll<Relationship>(tableName);
};

// DONE: Get Relationships by field
export const getRelationshipsBy = async (field: string, filter: string): Promise<Relationship[] | null> => {
  return sqliteClient.readByFilter<Relationship>(tableName, field, filter);
};

export const getRelationship = async (
  id: string
): Promise<Relationship | null> => {
  return sqliteClient.read<Relationship>(tableName, id);
};

//DONE: Add validation that the entities it is referencing actually exist
export const createRelationship = async (
  relationship: Omit<Relationship, '_id'>
): Promise<Relationship> => {
  const _id = uuid();

  // Enforce relationship definition with either another entity or owner
  if (!relationship.fromEntityID && !relationship.fromUserID) {
    throw new Error('Either fromEntityID or fromUserID must be defined.');
  }

  // Check for Entity existence
  if (relationship.fromEntityID && await entityService.getEntity(relationship.fromEntityID) === null){
    throw new Error('Please enter a valid fromEntityID to create a new relationship.');
  }
  if (relationship.toEntityID && await entityService.getEntity(relationship.toEntityID) === null){
    throw new Error('Please enter a valid toEntityID to create a new relationship.');
  }

  const payload = { ...relationship, _id };
  await sqliteClient.create<Relationship>(tableName, payload);
  return payload;
};

export const deleteRelationship = async (
  relationshipId: string
): Promise<null> => {
  await sqliteClient.destroy(tableName, relationshipId);
  return null;
};

//DONE: Add validation that the entities it is referencing actually exist
export const updateRelationship = async (
  relationshipUpdate: NullablePartial<Relationship> & Pick<Relationship, '_id'>
): Promise<NullablePartial<Relationship> & Pick<Relationship, '_id'>> => {
  await sqliteClient.update(tableName, relationshipUpdate);

  // Check that either fromEntityID or fromUserID is defined
  if (!relationshipUpdate.fromEntityID && !relationshipUpdate.fromUserID) {
    throw new Error('Either fromEntityID or fromUserID must be defined.');
  }

  // Check for Entity existence
  if (relationshipUpdate.fromEntityID && await entityService.getEntity(relationshipUpdate.fromEntityID) === null){
    throw new Error('Please enter a valid fromEntityID to create a new relationship.');
  }
  if (relationshipUpdate.toEntityID && await entityService.getEntity(relationshipUpdate.toEntityID) === null){
    throw new Error('Please enter a valid toEntityID to create a new relationship.');
  }

  return relationshipUpdate;
};

export const relationshipService = {
  getRelationship,
  getAllRelationships,
  getRelationshipsBy,
  createRelationship,
  deleteRelationship,
  updateRelationship,
};
