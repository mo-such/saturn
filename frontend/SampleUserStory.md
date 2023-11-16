# Description

- As a user, I need to be able to select which classes and types of
  entities I want to see in the table view. This will enable me to see more of the data I care about and reduce noise.

# Acceptance Criteria

- Implement the designs found in
  [this figma link](https://www.figma.com/file/4F8oDOeM3wwQTupU9CUP9G/Code-Challenge?node-id=1%3A6497&t=YdiJQqRPpuGmZ1J1-0)

- User should have the ability to select a single type. Upon selecting a type, the user will be taken to the table view where they will only see entities of the selected type. (client-side filtering is acceptable here)
- User should have the ability to toggle between a grid view and list view
- User should be able to search for classes/types with a partial, case-insensitive match on class/type name
- Total count of entities with the given type should be shown. There is a query for this exposed in the [graphql schema](../backend/src/schema.ts)