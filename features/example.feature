Feature: Basic Calculator

# Existing scenario
Scenario: Addition of two numbers
  Given I have a calculator
  When I enter 3 and 7
  And I press "add"
  Then the result should be 10

Scenario: Addition of two numbers
  Given I have a calculator
  When I enter 3 and 5
  And I press "add"
  Then the result should be 10

# New scenario
Scenario: Multiplication of two numbers
  Given I have a calculator
  When I enter 4 and 5
  And I press "multiply"
  Then the result should be 20
