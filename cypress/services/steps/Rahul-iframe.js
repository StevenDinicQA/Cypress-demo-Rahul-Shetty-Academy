import PageObjects from '../pages/RahulPage'

const pageObjects = new PageObjects()

class iframeSteps{

    scrollIntoView(){
        pageObjects.getIFrame().scrollIntoView()
        pageObjects.getIFrame().should('be.visible')
    }

    clickOnCourses(){
        cy.frameLoaded(pageObjects.getIFrame())
        cy.iframe().find('li').contains('Course').click()
        cy.wait(3000)
        cy.iframe().find('.course-listing-title').contains('All-Access Membership').click()
        
    }
    
    clickOnMentorship(){
        cy.frameLoaded(pageObjects.getIFrame())
        cy.iframe().find('li').contains('Mentorship').click()
        cy.wait(3000)
        cy.iframe().xpath('(//section[@class=\'page-title\'])[1]').should('include.text','Mentorship')
        //find finds only css and xpath can use xpath selector
    }

}

module.exports = new iframeSteps()