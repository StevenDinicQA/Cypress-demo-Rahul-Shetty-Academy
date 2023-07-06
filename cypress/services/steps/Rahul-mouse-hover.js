import PageObjects from '../pages/RahulPage'

const pageObjects = new PageObjects()

class mouseHoverSteps{

    assertMouseHover(){
        pageObjects.getMouseOver().should('be.visible')
    }

    clickOnTop(){
        pageObjects.getMouseOverContent()
         .invoke('show')
          .wait(1000)
        pageObjects.getMouseTop()
         .should('be.visible').wait(1000)
        pageObjects.getMouseTop().click()
    }
    
    clickOnReload(){
        pageObjects.getMouseOverContent()
         .invoke('show')
          .wait(1000)
        pageObjects.getMouseReload()
         .should('be.visible').wait(1000)
        pageObjects.getMouseReload().click()
    }

}
module.exports = new mouseHoverSteps()