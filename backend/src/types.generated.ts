import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Class = {
  __typename?: 'Class';
  displayName: Scalars['String'];
};

export type CreateEntityInput = {
  _class: Scalars['String'];
  _type: Scalars['String'];
  displayName: Scalars['String'];
};

export type CreateRelationshipInput = {
  displayName: Scalars['String'];
  fromEntityID: Scalars['ID'];
  toEntityID: Scalars['ID'];
};

export type DeleteEntityInput = {
  _id: Scalars['ID'];
};

export type DeleteRelationshipInput = {
  _id: Scalars['ID'];
};

export type Entity = {
  __typename?: 'Entity';
  _class: Scalars['String'];
  _id: Scalars['ID'];
  _type: Scalars['String'];
  displayName: Scalars['String'];
};

export type GetItemInput = {
  _id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createEntity: Entity;
  createRelationship: Relationship;
  deleteEntity: Scalars['Boolean'];
  deleteRelationship: Scalars['Boolean'];
  updateEntity: Entity;
  updateRelationship: Relationship;
};

export type MutationCreateEntityArgs = {
  input: CreateEntityInput;
};

export type MutationCreateRelationshipArgs = {
  input: CreateRelationshipInput;
};

export type MutationDeleteEntityArgs = {
  input: DeleteEntityInput;
};

export type MutationDeleteRelationshipArgs = {
  input: DeleteRelationshipInput;
};

export type MutationUpdateEntityArgs = {
  input: UpdateEntityInput;
};

export type MutationUpdateRelationshipArgs = {
  input: UpdateRelationshipInput;
};

export type Query = {
  __typename?: 'Query';
  classes: Array<Class>;
  entities: Array<Entity>;
  entity?: Maybe<Entity>;
  relationship?: Maybe<Relationship>;
  relationships: Array<Relationship>;
  types: Array<Type>;
};

export type QueryEntityArgs = {
  input: GetItemInput;
};

export type QueryRelationshipArgs = {
  input: GetItemInput;
};

export type QueryTypesArgs = {
  input: TypesInput;
};

export type Relationship = {
  __typename?: 'Relationship';
  _id: Scalars['ID'];
  displayName: Scalars['String'];
  fromEntityID: Scalars['ID'];
  toEntityID: Scalars['ID'];
};

export type Type = {
  __typename?: 'Type';
  displayName: Scalars['String'];
  parentClass: Scalars['String'];
};

export type TypesInput = {
  parentClassName: Scalars['String'];
};

export type UpdateEntityInput = {
  _class?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
  _type?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
};

export type UpdateRelationshipInput = {
  _id: Scalars['ID'];
  displayName?: InputMaybe<Scalars['String']>;
  fromEntityID: Scalars['ID'];
  toEntityID: Scalars['ID'];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Class: ResolverTypeWrapper<Class>;
  CreateEntityInput: CreateEntityInput;
  CreateRelationshipInput: CreateRelationshipInput;
  DeleteEntityInput: DeleteEntityInput;
  DeleteRelationshipInput: DeleteRelationshipInput;
  Entity: ResolverTypeWrapper<Entity>;
  GetItemInput: GetItemInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Relationship: ResolverTypeWrapper<Relationship>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Type: ResolverTypeWrapper<Type>;
  TypesInput: TypesInput;
  UpdateEntityInput: UpdateEntityInput;
  UpdateRelationshipInput: UpdateRelationshipInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Class: Class;
  CreateEntityInput: CreateEntityInput;
  CreateRelationshipInput: CreateRelationshipInput;
  DeleteEntityInput: DeleteEntityInput;
  DeleteRelationshipInput: DeleteRelationshipInput;
  Entity: Entity;
  GetItemInput: GetItemInput;
  ID: Scalars['ID'];
  Mutation: {};
  Query: {};
  Relationship: Relationship;
  String: Scalars['String'];
  Type: Type;
  TypesInput: TypesInput;
  UpdateEntityInput: UpdateEntityInput;
  UpdateRelationshipInput: UpdateRelationshipInput;
};

export type ClassResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Class'] = ResolversParentTypes['Class']
> = {
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Entity'] = ResolversParentTypes['Entity']
> = {
  _class?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  _type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  createEntity?: Resolver<
    ResolversTypes['Entity'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateEntityArgs, 'input'>
  >;
  createRelationship?: Resolver<
    ResolversTypes['Relationship'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateRelationshipArgs, 'input'>
  >;
  deleteEntity?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteEntityArgs, 'input'>
  >;
  deleteRelationship?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteRelationshipArgs, 'input'>
  >;
  updateEntity?: Resolver<
    ResolversTypes['Entity'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateEntityArgs, 'input'>
  >;
  updateRelationship?: Resolver<
    ResolversTypes['Relationship'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateRelationshipArgs, 'input'>
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  classes?: Resolver<Array<ResolversTypes['Class']>, ParentType, ContextType>;
  entities?: Resolver<Array<ResolversTypes['Entity']>, ParentType, ContextType>;
  entity?: Resolver<
    Maybe<ResolversTypes['Entity']>,
    ParentType,
    ContextType,
    RequireFields<QueryEntityArgs, 'input'>
  >;
  relationship?: Resolver<
    Maybe<ResolversTypes['Relationship']>,
    ParentType,
    ContextType,
    RequireFields<QueryRelationshipArgs, 'input'>
  >;
  relationships?: Resolver<
    Array<ResolversTypes['Relationship']>,
    ParentType,
    ContextType
  >;
  types?: Resolver<
    Array<ResolversTypes['Type']>,
    ParentType,
    ContextType,
    RequireFields<QueryTypesArgs, 'input'>
  >;
};

export type RelationshipResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Relationship'] = ResolversParentTypes['Relationship']
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fromEntityID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  toEntityID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Type'] = ResolversParentTypes['Type']
> = {
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parentClass?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Class?: ClassResolvers<ContextType>;
  Entity?: EntityResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Relationship?: RelationshipResolvers<ContextType>;
  Type?: TypeResolvers<ContextType>;
};
