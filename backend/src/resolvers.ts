import { ApolloError } from 'apollo-server-express';
import { classAndTypeService } from './classesAndTypes/service';
import { entityService } from './entities/service';
import { relationshipService } from './relationships/service';
import { userService } from './users/service';
import { Resolvers } from './types.generated';

export const resolvers: Resolvers = {
  Query: {
    // DONE: Pagination for getAllEntities query
    entities: (_source, args) => {
      return entityService.getAllEntities(args.limit, args.offset);
    },
    entity: (__source, args) => {
      return entityService.getEntity(args.input._id);
    },
    // DONE: Filter Entity query response
    entityby: (__source, args) => {
      return entityService.getEntityBy(args.input.field, args.input.filter);
    },
    // DONE: Get related entities
    entitiesbyrelationships: (__source, args) => {
      return entityService.getEntitiesByRelationships(args.input.field, args.input.filter);
    },
    relationships: (_source) => {
      return relationshipService.getAllRelationships();
    },
    relationship: (_source, args) => {
      return relationshipService.getRelationship(args.input._id);
    },
    relationshipsby: (_source, args) => {
      return relationshipService.getRelationshipsBy(args.input.field, args.input.filter);
    },
    classes: (_source) => {
      return classAndTypeService.getClasses();
    },
    types: (_source, args) => {
      return classAndTypeService.getTypes(args.input.parentClassName);
    },
    // Add User read queries
    users: (_source) => {
      return userService.getAllUsers();
    },
    user: (_source, args) => {
      return userService.getUser(args.input._id);
    },
  },
  Mutation: {
    createEntity: (_source, args) => {
      return entityService.createEntity(args.input);
    },
    updateEntity: async (_source, args) => {
      await entityService.updateEntity(args.input);
      const result = await entityService.getEntity(args.input._id);
      if (!result) {
        throw new ApolloError(`Can't find entity with id: ${args.input._id}`);
      }
      return result;
    },
    deleteEntity: async (_source, args) => {
      await entityService.deleteEntity(args.input._id);
      return true;
    },
    createRelationship: (_source, args) => {
      if (!args.input.fromEntityID && !args.input.fromUserID) {
        throw new Error('Either fromEntityID or fromUserID must be defined.');
      }
      return relationshipService.createRelationship(args.input);
    },
    updateRelationship: async (_source, args) => {
      await relationshipService.updateRelationship(args.input);
      const result = await relationshipService.getRelationship(args.input._id);
      if (!result) {
        throw new ApolloError(
          `Can't find relationship with id: ${args.input._id}`
        );
      }
      return result;
    },
    deleteRelationship: async (_source, args) => {
      await relationshipService.deleteRelationship(args.input._id);
      return true;
    },
    // DONE - User CRUD operations
    createUser: (_source, args) => {
      return userService.createUser(args.input);
    },
    updateUser: async (_source, args) => {
      await userService.updateUser(args.input);
      const result = await userService.getUser(args.input._id);
      if (!result) {
        throw new ApolloError(
          `Can't find relationship with id: ${args.input._id}`
        );
      }
      return result;
    },
    deleteUser: async (_source, args) => {
      await userService.deleteUser(args.input._id);
      return true;
    },
  },
};
