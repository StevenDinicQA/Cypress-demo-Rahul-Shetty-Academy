/// <reference types="cypress" />

import WebTables from '../../services/steps/Rahul-WebTables';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('User checks web tables', () => {

    beforeEach('Go to dashboard page', () => {
      cy.visit('AutomationPractice/')
    })

    it('User checks web table', () =>{

        WebTables.checkWebTable()
        WebTables.checkColumnOne()
        WebTables.checkColumnTwo()
        WebTables.checkColumnThree()
        WebTables.checkColumnFour()
    })

  })