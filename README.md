# Test
Write test for program had three steps:
* End to End (E2E) => using cypress or selenium
* Integration
* Unit

## Installation packages
```
$ npm install --save-dev jest typescript ts-jest @types/jest
```
```
$ npx ts-jest config:init
```
```
$ npm i --save-dev @testing-library/react @testing-library/user-event @testing-library/dom @testing-library/jest-dom  
```
add this to jest.config.js:
```js
module.exports = {
    "testEnvironment": "jsdom"
}
```


[check stacks-overflow] (https://stackoverflow.com/questions/69227566/consider-using-the-jsdom-test-environment)


after all we should get this line of error!
```text
● Validation Error:

  Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.

  Configuration Documentation:
  https://jestjs.io/docs/configuration


As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.

```

u should install this package:
```
$ npm install -D jest-environment-jsdom  
```


## TDD (Test Driven Development)
that's have a cycle:
Write failing test => Make the test pass => Refactor

### Live testing
Please use this webpage: [real time testing] (https://testing-playground.com)