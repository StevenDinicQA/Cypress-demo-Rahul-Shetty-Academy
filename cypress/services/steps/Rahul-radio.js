import PageObjects from '../../services/pages/RahulPage'

const pageObjects = new PageObjects()

class radioBtnsSteps{

    assertVisible(){
        pageObjects.getRadioBox().should('be.visible')
    }

    firstClick(){
       pageObjects.getRadio1().click()
       pageObjects.getRadio1().should('be.checked')
    }

    secondClick(){
      pageObjects.getRadio2().click()
      pageObjects.getRadio2().should('be.checked')
    }

    thirdClick(){
      pageObjects.getRadio3().click()
      pageObjects.getRadio3().should('be.checked')
    }

}
module.exports = new radioBtnsSteps()