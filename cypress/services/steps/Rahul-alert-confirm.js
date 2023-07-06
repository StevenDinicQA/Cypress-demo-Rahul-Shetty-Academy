import PageObjects from '../../services/pages/RahulPage'

const pageObjects = new PageObjects()

class alertsConfirmSteps{

    alertsBoxCheck(){
        pageObjects.getAlertsBox().should('be.visible')
    }

    clickAlert(){
        pageObjects.getAlertsName().type('John')
        cy.on("window:alert", (str) =>{
            expect(str).to.equal('Hello John, share this practice page and share your knowledge')
            pageObjects.getAlertsBtn().click()
        })       
    }

    clickConfirm(){
        pageObjects.getAlertsName().type('John')
        cy.on("window:confirm", (str) =>{
            expect(str).to.equal('Hello John, Are you sure you want to confirm?')
            return true;
        })
        pageObjects.getConfirmBtn().click()
    }

}

module.exports = new alertsConfirmSteps()