import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    entities: [Entity!]!
    entity(input: GetItemInput!): Entity
    relationships: [Relationship!]!
    relationship(input: GetItemInput!): Relationship
    classes: [Class!]!
    types(input: TypesInput!): [Type!]!
  }

  type Mutation {
    createEntity(input: CreateEntityInput!): Entity!
    deleteEntity(input: DeleteEntityInput!): Boolean!
    updateEntity(input: UpdateEntityInput!): Entity!
    createRelationship(input: CreateRelationshipInput!): Relationship!
    deleteRelationship(input: DeleteRelationshipInput!): Boolean!
    updateRelationship(input: UpdateRelationshipInput!): Relationship!
  }

  input GetItemInput {
    _id: ID!
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
    fromEntityID: ID!
    toEntityID: ID!
  }

  input DeleteRelationshipInput {
    _id: ID!
  }

  input UpdateRelationshipInput {
    _id: ID!
    displayName: String
    fromEntityID: ID!
    toEntityID: ID!
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
    fromEntityID: ID!
  }
`;
