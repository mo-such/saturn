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
- `npm run seed` (This will init the sqlite database & seed it with sample data)
- `npm run start` (This will start the server on port 4000)

## Requirements

Each challenge is worth a certain amount of 'points', the amount of points
expected differes with each level:

- **Senior+**: 5 points
- **Mid Level**: 3 points
- **Junior**: 2 points

## Challenges:

- 2 points: Add the ability to create, read, update, and delete Users via the
  api. A `User`, in this case, would refer to someone using the application, not
  to be confused with or related to an `Entity` with a type of `User`. Note that
  this will require you to create a new database table.
  - If you added the ability to do CRUD on Users, you can do either of the
    following two challenges as well if you want:
    - 1 point: Add a way to assign an “Owner” (User) to an entity and then query
      for all entities assigned to a given owner
    - 1 point: Create a way to restrict which entities are visible to a given
      user
- 2 points: Implement pagination for any one query
- 1 point: Prevent entities from being created/updated if the class and/or type
  they are being created with is not one that is already in the DB
- 1 point: Implement a way to filter which entities are returned from a query
- 1 point: Implement a way for me to query for all entities related to a given
  entity
- 1 point: Add Unit and integration tests for new and/or existing functionality,
  you don't need to get 100% coverage but justify which tests you do/do not
  write in the description for your pull request
- This project has several areas where the code can be improved/optimized. If
  you find an area of existing code you think could be improved, feel free to do
  so and then document your approach in your submission. Many of these areas are
  flagged with a `TODO:`.
