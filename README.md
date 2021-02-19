# Introduction

Greetings, Tally!

This is a project bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and the intent is to provide a proof of concept web application to help customers budget how much they need to save on a down payment for their property.

The feature presents a `Mortgage Calculator` that takes in the following information:
1. Payment period [10, 15, 20, 30, 50] years
2. Interest rate defaulted to the current federal interest +2.5%
3. Principal amount

The calculation for mortgage payments is using the following formula ([Source](https://www.thebalance.com/calculate-mortgage-315668#mntl-sc-block_1-0-26)):

```
Payment = P x (r / n) x (1 + r / n)^n(t) / ( (1 + r / n)^n(t) - 1 )

P = Principal Amount
r = Interest Rate
n = 12 (months in a year)
t = Payment Period
```

In addition, the user has the option to specify:
1. The amount of savings they can set aside each month
2. The number of months they are able to save (being able to choose from 1 month up to 5 years)

The savings calculation is as follows:

```
Saved Amount = (Amount per month) x (Number of months)
```

And then it affects the monthly payment calculation by having

```
Principal Amount = (Principal Amount) - (Saved Amount)
```

And by providing this optional budgeting information, the user will be able to see how their amount saved and contributed towards a down payment will reduce the loan principle.



## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Executes test cases that verify the mathematical computations that go towards composing the data used in the mortgage calculations as well as the end result.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.