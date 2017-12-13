This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Run project locally:

`npm start`

`npx cypress open`

# Notes

* Cypress does not go well with the `fetch` api. I've discovered it the hard way.
* Prefer a lib like `axios`.

## Requests

My examples are at `/cypress/integration/test_spec.js`. There you'll find 4 main tests about requests:

* local fetch without stubbing
* local fetch with stubbing
* remote fetch without stubbing
* remote fetch with stubbing

The url can be tricky to get right with `cy.route`. Here are some examples that work with the same request:

#### App:

`axios.get("https://jsonplaceholder.typicode.com/posts/1")`

#### Cypress:

* `cy.route("https://jsonplaceholder.typicode.com/posts/1")`
* `cy.route(/posts/)`
* `cy.route("/posts/*")`

## About Cypress

https://www.cypress.io/

Doc at https://docs.cypress.io/
