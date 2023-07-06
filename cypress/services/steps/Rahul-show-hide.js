import PageObjects from '../../services/pages/RahulPage'

const pageObjects = new PageObjects()

class showHideSteps{

    assertVisibleField(){
        pageObjects.getRightField().should('be.visible')
    }

    clickHide(){
        pageObjects.getHideTextBox().click()
    }

    clickShow(){
        pageObjects.getShowTextBox().click()
        pageObjects.getDisplayedText().type('Hello!')
        pageObjects.getDisplayedText().should('be.visible', 'Hello!')
    }


}

module.exports = new showHideSteps()