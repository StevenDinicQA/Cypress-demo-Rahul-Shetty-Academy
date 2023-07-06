import PageObjects from '../../services/pages/RahulPage'

const pageObjects = new PageObjects()

class checkboxSteps{

    checkbox1(){
        pageObjects.getCheckboxList().should('be.visible')
        pageObjects.getOption1().click()
        pageObjects.getOption1().should('be.checked')
    }

    checkbox2(){
        pageObjects.getOption2().click()
        pageObjects.getOption2().should('be.checked')
    }

    checkbox3(){
        pageObjects.getOption3().click()
        pageObjects.getOption3().should('be.checked')
    }
}

module.exports = new checkboxSteps()