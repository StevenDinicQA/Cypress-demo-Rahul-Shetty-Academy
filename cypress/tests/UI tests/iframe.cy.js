/// <reference types="cypress" />

import iframeSteps from '../../services/steps/Rahul-iframe';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('User uses iframe', () => {

    beforeEach('Go to dashboard page', () => {
      cy.visit('AutomationPractice/')
    })

    it('User goes on iframe blog', () =>{
        iframeSteps.scrollIntoView()
        iframeSteps.clickOnCourses()
    })
   
    it.only('User goes on iframe blog', () =>{
        iframeSteps.scrollIntoView()
        iframeSteps.clickOnMentorship()
    })

  })