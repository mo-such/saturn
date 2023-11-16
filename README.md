# JupiterOne Take-Home Exercise
The goals of this exercise are two-fold: First, we want to provide you with an opportunity to work in a small code-base similar to what you would be working in if you were a member of the team. Hopefully this will help you decide if the tech stack/style of code we use here is interesting to you or not. Second, this will provide both of us an opportunity to evaluate how your coding capabilities could possibly fit into the team here at JupiterOne. You are expected to write production-quality code for this exercise.

## What does this sample app do?
This is a simple view that mimics JupiterOne's "Asset Inventory" view. The table displays all of the entities in the database, each of these entities has a "Class" and a "Type" giving categorization to the type of entity. Entities can relate to one another (with a many to many relationship). Entities relate to one another via Relationships, a relationship has a "from" entity and a "to" entity.

## Where do I start?
This repo is split into two different projects:

- [Frontend](frontend/README.md)
- [Backend](backend/README.md)

With it being a monorepo, note that you will need to run commands from within the frontend/backend directories rather than the root of the project.

Each project has its own set of requirements, be sure to read the instructions thoroughly. If you are interviewing for the full stack position, see the [Fullstack Instructions](fullstack-instructions.md).

To get started, first import this repository into your personal github account as a **private** repo. To do this, navigate to [this url](https://github.com/new/import) and paste [https://github.com/JupiterOne/saturn-take-home-excercise](https://github.com/JupiterOne/saturn-take-home-excercise) as the value for "Your old repository's clone URL". All your code changes should be made to your private repository **on a branch that is not the default branch**.

## How do I submit my solution?
When you are ready to submit your solution, create a pull request that targets the `main` branch from the feature branch you have been working on. This pull request should include all your changes you want to be evaluated. Use the PR description field as an opportunity to clarify what objectives you did, why you made that decision, and any other information you want to include that will clarify your approach.

The final step is to invite `hesto2` as an administrator to your repository. The admin rights are necessary so other reviewers can be added, as necessary.
