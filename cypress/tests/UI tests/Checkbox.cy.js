/// <reference types="cypress" />

import RahulCheckbox from '../../services/steps/Rahul-checkbox'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('Checkbox rundown', () =>{

    beforeEach('Go to dashboard page', () => {
        cy.visit('AutomationPractice/')
    })

    it('Clicking on checkbox', () =>{

         RahulCheckbox.checkbox1()
         RahulCheckbox.checkbox2()
         RahulCheckbox.checkbox3()
    })

  })