# Backend Take-Home Exercise Instructions

This project provides you with a basic backend project that uses technology
similar to what we use in our production apps at JupiterOne. Some of the primary
technologies we use (and have included in the project) are
[Apollo Server](https://www.apollographql.com/),
[AWS Lambda](https://aws.amazon.com/lambda/), and
[Terraform](https://www.terraform.io/) (not included in this project).

## How to run the project

Run the following:

- `npm install`
- `npx graphql-codegen` Generate types.generated.ts based on schema
- `npm run seed` (This will init the sqlite database & seed it with sample data)
- `npm run start` (This will start the server on port 4000)

## Requirements

Each challenge is worth a certain amount of 'points', the amount of points
expected differs with each level:

- **Senior+**: 5 points
- **Mid Level**: 3 points
- **Junior**: 2 points

## Challenges:

- 2 points: Add the ability to create, read, update, and delete Users via the
  api. A `User`, in this case, would refer to someone using the application, not
  to be confused with or related to an `Entity` with a type of `User`. Note that
  this will require you to create a new database table. - DONE
  - If you added the ability to do CRUD on Users, you can do either of the
    following two challenges as well if you want:
    - 1 point: Add a way to assign an “Owner” (User) to an entity and then query
      for all entities assigned to a given owner - DONE

      2 (potential) approaches to solving this, 
      
      * Approach 1 -> ownerId maintained as relationship 
      Schema: Multi-step query
      1] Get list of relationships associated with given userID
      2] Map toEntity IDs with corresponding Entity objects
      3] Query details of Entities based on extracted IDs

      Approach 2 -> Append ownerID to entity when relationship is created, direct attribute
      1] Query entity directly by ownerID
      X - vetoing this approach because I built it using relationships first and don't feel
      like creating a continuous relationship generation service to support directly adding this attribute

    - 1 point: Create a way to restrict which entities are visible to a given
      user - seems like we would need some kind of auth scheme for this or views? Not
      sure I have a sleek approach for accomplishing this, requires some frontend collab - NOT IMPLEMENTED

      Dumb backend approach - NOT IMPLEMENTED because I basically did this already 
      just optionally in the previous requirement 
      1] Enforce ownerID filter on all entity queries
      2] return only entities satisfying ownerID condition

      OR 

      Some type of auth scheme? Or user-specific view?

- 2 points: Implement pagination for any one query - DONE

- 1 point: Prevent entities from being created/updated if the class and/or type
  they are being created with is not one that is already in the DB - DONE

- 1 point: Implement a way to filter which entities are returned from a query - DONE

  What current query scheme looks like:
  request entities by _id 
    -> return hit _id, null if not found
    -> return other fields upon selection _type _class displayName

  Modifications
  1] allow optional filter condition to returnAll sequence upon return

- 1 point: Implement a way for me to query for all entities related to a given
  entity - DONE

  Workflow: Query relationships based on toEntityID -> return list of results
  input: fromEntityID
  output: toEntityID -> query Entities with list of _ids
  -> Use existing getEntityBy function 

- 1 point: Add Unit and integration tests for new and/or existing functionality,
  you don't need to get 100% coverage but justify which tests you do/do not
  write in the description for your pull request - NOT IMPLEMENTED

  I don't feel like writing unittests for this but did enough testing while
  developing for my own comfort levels with this submission, check the test_case
  folder for proof

- This project has several areas where the code can be improved/optimized. If
  you find an area of existing code you think could be improved, feel free to do
  so and then document your approach in your submission. Many of these areas are
  flagged with a `TODO:`.
