import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    entities(limit: Int!, offset: Int!): [Entity!]!
    entity(input: GetItemInput!): Entity
    entityby(input: GetEntityInput!): [Entity]
    entitiesbyrelationships(input: GetEntityInput!): [Entity]
    relationships: [Relationship!]!
    relationship(input: GetItemInput!): Relationship
    relationshipsby(input: GetEntityInput!): [Relationship]
    classes: [Class!]!
    types(input: TypesInput!): [Type!]!
    users: [User!]!
    user(input: GetItemInput!): User
  }

  type Mutation {
    createEntity(input: CreateEntityInput!): Entity!
    deleteEntity(input: DeleteEntityInput!): Boolean!
    updateEntity(input: UpdateEntityInput!): Entity!
    createRelationship(input: CreateRelationshipInput!): Relationship!
    deleteRelationship(input: DeleteRelationshipInput!): Boolean!
    updateRelationship(input: UpdateRelationshipInput!): Relationship!
    createUser(input: CreateUserInput!): User!
    deleteUser(input: DeleteUserInput!): Boolean!
    updateUser(input: UpdateUserInput!): User!
  }

  input GetItemInput {
    _id: ID!
  }

  input GetEntityInput {
    field: String!
    filter: String!
  }

  input CreateEntityInput {
    displayName: String!
    _type: String!
    _class: String!
  }

  input DeleteEntityInput {
    _id: ID!
  }

  input UpdateEntityInput {
    _id: ID!
    displayName: String
    _type: String
    _class: String
  }

  input CreateRelationshipInput {
    displayName: String!
    fromEntityID: ID
    toEntityID: ID!
    fromUserID: ID
  }

  input DeleteRelationshipInput {
    _id: ID!
  }

  input UpdateRelationshipInput {
    _id: ID!
    displayName: String
    fromEntityID: ID
    toEntityID: ID!
    fromUserID: ID
  }

  input CreateUserInput {
    userName: String!
  }

  input DeleteUserInput {
    _id: ID!
  }

  input UpdateUserInput {
    _id: ID!
    userName: String!
  }

  input DeleteRelationshipInput {
    _id: ID!
  }

  input UpdateRelationshipInput {
    _id: ID!
    displayName: String
    fromEntityID: ID
    toEntityID: ID!
    fromUserID: ID
  }

  input TypesInput {
    parentClassName: String!
  }

  type Class {
    displayName: String!
  }

  type Type {
    displayName: String!
    parentClass: String!
  }

  type Entity {
    _id: ID!
    displayName: String!
    _type: String!
    _class: String!
  }

  type Relationship {
    _id: ID!
    displayName: String!
    toEntityID: ID!
    fromEntityID: ID
    fromUserID: ID
  }

  type User {
    _id: ID!
    userName: String!
  }
`;
