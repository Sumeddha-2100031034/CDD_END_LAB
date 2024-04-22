const { Given, When, Then } = require('@cucumber/cucumber');
let calculator;

Given('I have a calculator', () => {
  calculator = { result: 0 };
});

When('I enter {int} and {int}', (num1, num2) => {
  calculator.num1 = num1;
  calculator.num2 = num2;
});

When('I press "add"', () => {
  calculator.result = calculator.num1 + calculator.num2;
});

When('I press "multiply"', () => {
  calculator.result = calculator.num1 * calculator.num2;
});

Then('the result should be {int}', (expected) => {
  if (calculator.result !== expected) {
    throw new Error(`Expected ${expected} but got ${calculator.result}`);
  }
});
