import { sqliteClient } from '../sqliteClient';
import { Entity, Relationship, NullablePartial } from '../types';
import { relationshipService } from '../relationships/service';
import { v4 as uuid } from 'uuid';
const tableName = 'entity';

// DONE: Pagination for getAllEntities query
export const getAllEntities = async (limit: number, offset: number): Promise<Entity[]> => {
  return sqliteClient.readPage<Entity>(tableName, limit, offset);
};

export const getEntity = async (id: string): Promise<Entity | null> => {
  return sqliteClient.read<Entity>(tableName, id);
};

// DONE: Filter Entity query response
export const getEntityBy = async (field: string, filter: string): Promise<Entity[] | null> => {
  return sqliteClient.readByFilter<Entity>(tableName, field, filter);
};

// DONE: Filter Entity by relationship attributes
export const getEntitiesByRelationships = async (entity: string, id: string): Promise<Entity[] | null> => {
  // Get relationships by to/from ID -> use opposite field to query Entities
  if (entity === 'toEntityID' || entity === 'fromEntityID') {
    const relationships: Relationship[] | null = await relationshipService.getRelationshipsBy(entity, id)
    const oppositeField = entity === 'toEntityID' ? 'fromEntityID' : 'toEntityID';

    if (relationships !== null) {
      const entityIds = relationships.map((relationship) => relationship[oppositeField]);
      if (entityIds !== null) {
        return sqliteClient.readByFilters<Entity>(tableName, entityIds);
      }
    }
  } else {
    if (entity === 'fromUserID') {
      const relationships: Relationship[] | null = await relationshipService.getRelationshipsBy(entity, id)

      if (relationships !== null) {
        const entityIds = relationships.map((relationship) => relationship['toEntityID']);
        if (entityIds !== null) {
          return sqliteClient.readByFilters<Entity>(tableName, entityIds);
        }
      }
  } else {
    if (entity !== 'toEntityID' && entity !== 'fromEntityID' && entity !== 'fromUserID') {
      throw new Error('Invalid entity type');
    }
  }
  }
  return []
};

export const createEntity = async (
  entity: Omit<Entity, '_id'>
): Promise<Entity> => {
  // DONE: Check for valid _class and/or _type entry
  const existingClass = await sqliteClient.readByClass<Entity>(tableName, entity._class);
  if (!existingClass) {
    throw new Error(`The provided _class '${entity._class}' does not exist.`);
  }
  const existingType = await sqliteClient.readByType<Entity>(tableName, entity._type);
  if (!existingType) {
    throw new Error(`The provided _type '${entity._type}' does not exist.`);
  }
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
  getEntityBy,
  getEntitiesByRelationships,
  createEntity,
  deleteEntity,
  updateEntity,
};
