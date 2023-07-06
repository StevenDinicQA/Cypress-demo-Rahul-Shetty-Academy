/// <reference types="cypress" />

import RahulShowHide from '../../services/steps/Rahul-show-hide'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('User clicks on show and hide', () =>{

    beforeEach('Go to dashboard page', () => {
        cy.visit('AutomationPractice/')
      })

    it('User hides text box', () =>{

      RahulShowHide.assertVisibleField()
      RahulShowHide.clickHide()
    })

    it('User shows text box', () =>{

      RahulShowHide.assertVisibleField()
      RahulShowHide.clickHide()
      RahulShowHide.clickShow()
    })


    })