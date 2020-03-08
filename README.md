Node API Example using Node, Mongo DB, mongoose and postman 

## Environment dependencies

- Node.js 8+ (with bundled version of npm)
- Reasonably recent version of a modern browser (Chrome, Firefox, Edge, Safari)

## Setup
**Install npm dependencies**
$ npm install

## Starting the servers
$ npm start starts the express server

- [Available Scripts](#available-scripts)
  - [npm run lint](#npm-run-lint)
  - [npm run lint_project_fix](#npm-run-lint_project_fix)
  - [npm start](#npm-start)

- [Eslint](#eslint)

## Available Scripts

  ### `npm start`
  ### `npm run start`

  Starts the express server<br>
  Open [http://localhost:3000] to view it in the browser.

  tests are in postman_test_collection folder
  ### `npm run test`

  Use this script to test the project.
  
  ### `npm run lint`

  Use this script to run project wide eslint report in console or pipe to a file >filename -- in quiet mode

  ### `npm run lint_project_fix`

  Use this script to run project wide eslint with --fix for autofix on project in quiet mode (no warnings)
  