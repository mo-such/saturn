import { sqliteClient } from '../sqliteClient';
import { Relationship, NullablePartial } from '../types';
import { v4 as uuid } from 'uuid';
const tableName = 'relationship';

export const getAllRelationships = async (): Promise<Relationship[]> => {
  return sqliteClient.readAll<Relationship>(tableName);
};
export const getRelationship = async (
  id: string
): Promise<Relationship | null> => {
  return sqliteClient.read<Relationship>(tableName, id);
};

//TODO: Add validation that the entities it is referencing actually exist
export const createRelationship = async (
  relationship: Omit<Relationship, '_id'>
): Promise<Relationship> => {
  const _id = uuid();
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

//TODO: Add validation that the entities it is referencing actually exist
export const updateRelationship = async (
  relationshipUpdate: NullablePartial<Relationship> & Pick<Relationship, '_id'>
): Promise<NullablePartial<Relationship> & Pick<Relationship, '_id'>> => {
  await sqliteClient.update(tableName, relationshipUpdate);
  return relationshipUpdate;
};

export const relationshipService = {
  getRelationship,
  getAllRelationships,
  createRelationship,
  deleteRelationship,
  updateRelationship,
};
