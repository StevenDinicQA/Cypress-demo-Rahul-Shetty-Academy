/// <reference types="cypress" />

import RahulAlertsConfirm from '../../services/steps/Rahul-alert-confirm'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('User clicks on alert and confirm', () =>{

    beforeEach('Go to dashboard page', () => {
        cy.visit('AutomationPractice/')
      })

      it('User clicks on alert', () =>{

        RahulAlertsConfirm.alertsBoxCheck()
        RahulAlertsConfirm.clickAlert()
      })

      it('User clicks on confirm', () =>{
        RahulAlertsConfirm.alertsBoxCheck()
        RahulAlertsConfirm.clickConfirm()

      })

  })