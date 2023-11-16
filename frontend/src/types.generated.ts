import {
  FieldPolicy,
  FieldReadFunction,
  TypePolicies,
  TypePolicy,
} from '@apollo/client/cache';
export type ClassKeySpecifier = ('displayName' | ClassKeySpecifier)[];
export type ClassFieldPolicy = {
  displayName?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type EntityKeySpecifier = (
  | '_class'
  | '_id'
  | '_type'
  | 'displayName'
  | EntityKeySpecifier
)[];
export type EntityFieldPolicy = {
  _class?: FieldPolicy<any> | FieldReadFunction<any>;
  _id?: FieldPolicy<any> | FieldReadFunction<any>;
  _type?: FieldPolicy<any> | FieldReadFunction<any>;
  displayName?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MutationKeySpecifier = (
  | 'createEntity'
  | 'createRelationship'
  | 'deleteEntity'
  | 'deleteRelationship'
  | 'updateEntity'
  | 'updateRelationship'
  | MutationKeySpecifier
)[];
export type MutationFieldPolicy = {
  createEntity?: FieldPolicy<any> | FieldReadFunction<any>;
  createRelationship?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteEntity?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteRelationship?: FieldPolicy<any> | FieldReadFunction<any>;
  updateEntity?: FieldPolicy<any> | FieldReadFunction<any>;
  updateRelationship?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = (
  | 'classes'
  | 'entities'
  | 'entity'
  | 'relationship'
  | 'relationships'
  | 'types'
  | QueryKeySpecifier
)[];
export type QueryFieldPolicy = {
  classes?: FieldPolicy<any> | FieldReadFunction<any>;
  entities?: FieldPolicy<any> | FieldReadFunction<any>;
  entity?: FieldPolicy<any> | FieldReadFunction<any>;
  relationship?: FieldPolicy<any> | FieldReadFunction<any>;
  relationships?: FieldPolicy<any> | FieldReadFunction<any>;
  types?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RelationshipKeySpecifier = (
  | '_id'
  | 'displayName'
  | 'fromEntityID'
  | 'toEntityID'
  | RelationshipKeySpecifier
)[];
export type RelationshipFieldPolicy = {
  _id?: FieldPolicy<any> | FieldReadFunction<any>;
  displayName?: FieldPolicy<any> | FieldReadFunction<any>;
  fromEntityID?: FieldPolicy<any> | FieldReadFunction<any>;
  toEntityID?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TypeKeySpecifier = (
  | 'displayName'
  | 'parentClass'
  | TypeKeySpecifier
)[];
export type TypeFieldPolicy = {
  displayName?: FieldPolicy<any> | FieldReadFunction<any>;
  parentClass?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
  Class?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | ClassKeySpecifier
      | (() => undefined | ClassKeySpecifier);
    fields?: ClassFieldPolicy;
  };
  Entity?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | EntityKeySpecifier
      | (() => undefined | EntityKeySpecifier);
    fields?: EntityFieldPolicy;
  };
  Mutation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | MutationKeySpecifier
      | (() => undefined | MutationKeySpecifier);
    fields?: MutationFieldPolicy;
  };
  Query?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | QueryKeySpecifier
      | (() => undefined | QueryKeySpecifier);
    fields?: QueryFieldPolicy;
  };
  Relationship?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | RelationshipKeySpecifier
      | (() => undefined | RelationshipKeySpecifier);
    fields?: RelationshipFieldPolicy;
  };
  Type?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | TypeKeySpecifier | (() => undefined | TypeKeySpecifier);
    fields?: TypeFieldPolicy;
  };
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
