/// <reference types="cypress" />

import newWindowTab from '../../services/steps/Rahul-windowTab';


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('New windows and tabs', () =>{

    beforeEach('Go to dashboard page', () => {
        cy.visit('AutomationPractice/')
    })

    it('user opens new window', () =>{
        
        newWindowTab.newWindow()
    })

    it('user opens new tab', () =>{

        newWindowTab.newTab()
    })

})