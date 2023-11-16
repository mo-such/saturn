import { ApolloError } from 'apollo-server-express';
import { classAndTypeService } from './classesAndTypes/service';
import { entityService } from './entities/service';
import { relationshipService } from './relationships/service';
import { Resolvers } from './types.generated';

export const resolvers: Resolvers = {
  Query: {
    entities: (_source) => {
      return entityService.getAllEntities();
    },
    entity: (__source, args) => {
      return entityService.getEntity(args.input._id);
    },
    relationships: (_source) => {
      return relationshipService.getAllRelationships();
    },
    relationship: (_source, args) => {
      return relationshipService.getRelationship(args.input._id);
    },
    classes: (_source) => {
      return classAndTypeService.getClasses();
    },
    types: (_source, args) => {
      return classAndTypeService.getTypes(args.input.parentClassName);
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
  },
};
