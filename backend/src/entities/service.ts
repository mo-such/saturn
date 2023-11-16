import { sqliteClient } from '../sqliteClient';
import { Entity, NullablePartial } from '../types';
import { v4 as uuid } from 'uuid';
const tableName = 'entity';

export const getAllEntities = async (): Promise<Entity[]> => {
  return sqliteClient.readAll<Entity>(tableName);
};
export const getEntity = async (id: string): Promise<Entity | null> => {
  return sqliteClient.read<Entity>(tableName, id);
};

export const createEntity = async (
  entity: Omit<Entity, '_id'>
): Promise<Entity> => {
  const _id = uuid();
  const payload = { ...entity, _id };
  await sqliteClient.create<Entity>(tableName, payload);
  return payload;
};

export const deleteEntity = async (entityId: string): Promise<null> => {
  await sqliteClient.destroy(tableName, entityId);
  return null;
};

export const updateEntity = async (
  entityUpdate: NullablePartial<Entity> & Pick<Entity, '_id'>
): Promise<NullablePartial<Entity> & Pick<Entity, '_id'>> => {
  await sqliteClient.update(tableName, entityUpdate);
  return entityUpdate;
};

export const entityService = {
  getEntity,
  getAllEntities,
  createEntity,
  deleteEntity,
  updateEntity,
};
