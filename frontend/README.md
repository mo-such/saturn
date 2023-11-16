# Frontend Take-Home Exercise Instructions

This project provides you with a basic UI project that uses technology similar
to what we use in our production apps at JupiterOne. Some of the primary
technologies we use (and have included in the project) are
[React](https://reactjs.org/), [Apollo Client](https://www.apollographql.com/),
and [Material UI](https://mui.com/core/). For some of the challenges, you will need to consume existing queries/mutations found in the [backend schema](../backend/src/schema.ts).

## How to run the project
Run the following:

- `npm install`
- `npm run start`

** Note that you will need to run the server locally in order to have data to work with. To do this, see the instructions [here](../backend/README.md).

If you want to run storybook to preview the components and to aid in development, you can do so with: `npm storybook`

## Requirements

Each challenge is worth a certain amount of 'points', the amount of points
expected differes with each level:

- **Senior+**: 6 points
- **Mid Level**: 4 points
- **Junior**: 3 points

## Challenges:

- 3 points: Complete the user story defined in the [sample user story](./SampleUserStory.md)
- 3 points: Create a way to visualize all the entities and the relationships between
  them
- 1 point: Add the ability to create, update, and delete entities (this will
  require looking at the server code to see what GraphQL mutations are
  available)
- 1 point: add the ability to link entities via a relationship
- 1 point: Implement error handling for network errors, provide a fallback in
  the UI for potentially failing api calls
- 1 point: Add client side sorting, searching, and filtering to the table
  displaying the entities
- 1 point: Add the ability to bulk modify or delete entities
- 1 point: Implement a toggleable dark mode for the app
- 1 point: Add Unit and integration tests around new and/or existing
  functionality, you don't need to get 100% coverage but justify which tests you
  do/do not write in the description for your pull request
- 1 point: Add something new to the app that will showcase your skills (Some
  examples could be navigation, new routes, nested routes, improving the styling
  of the app, etc.)
  - If you want to add a new page from scratch, feel free to add a new model to
    the GraphQL schema. This will also require a schema change on the server.
