/// <reference types="cypress" />

import mouseHoverSteps from '../../services/steps/Rahul-mouse-hover';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('User uses mouse hover', () => {

    beforeEach('Go to dashboard page', () => {
      cy.visit('AutomationPractice/')
    })

    it('Mouse hover Top', () =>{
        mouseHoverSteps.assertMouseHover() 
        mouseHoverSteps.clickOnTop()
    })

    it('Mouse hover reload', ()=>{
      mouseHoverSteps.assertMouseHover()
      mouseHoverSteps.clickOnReload()

    })

  })