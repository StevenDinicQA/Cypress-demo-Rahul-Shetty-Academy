/// <reference types="cypress" />

import RahulCountries from '../../services/steps/Rahul-countries'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('User types countries', () => {

  beforeEach('Go to dashboard page', () => {
    cy.visit('AutomationPractice/')
  })

  it('User types 3 countries separately', () => {
    RahulCountries.selectingCountry()
    RahulCountries.clearSelect()
    RahulCountries.selectCountryArray()
  })

})