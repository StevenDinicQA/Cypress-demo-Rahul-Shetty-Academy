/// <reference types="cypress" />

import DropdownSteps from "../../services/steps/Rahul-dropdown";


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('User uses dropdown', () =>{

    beforeEach('Go to dashboard page', () => {
        cy.visit('AutomationPractice/')
    })

    it('user uses dropdown', () =>{

        DropdownSteps.selectDropdownOption()
    })

})