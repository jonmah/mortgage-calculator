# Introduction

Greetings, Tally!

This is a project bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and the intent is to provide a proof of concept web application to help customers budget how much they need to save on a down payment for their property.

The feature presents a `Mortgage Calculator` that takes in the following information:
1. Payment period [10, 15, 20, 30, 50] years
2. Interest rate defaulted to the current federal interest +2.5%
3. Principal amount

In addition, the user has the option to specify:
1. The amount of savings they can set aside each month
2. The number of months they are able to save (being able to choose from 1 month up to 5 years)

And by providing this optional budgeting information, the user will be able to see how their amount saved and contributed towards a down payment will reduce the loan principle.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.