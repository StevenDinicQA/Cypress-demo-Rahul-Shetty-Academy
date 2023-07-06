/// <reference types="cypress" />

import RadioSteps from '../../services/steps/Rahul-radio';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('User clicks radio buttons', () => {

    beforeEach('Go to dashboard page', () => {
      cy.visit('AutomationPractice/')
    })

    it('Radio btns', () =>{

      RadioSteps.assertVisible()
      RadioSteps.firstClick()
      RadioSteps.secondClick()
      RadioSteps.thirdClick()
    })

  })