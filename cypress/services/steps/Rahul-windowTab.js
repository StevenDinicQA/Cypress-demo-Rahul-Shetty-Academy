import PageObjects from '../../services/pages/RahulPage'

const pageObjects = new PageObjects()

class windowTab{

    newWindow(){
        pageObjects.getNewWindow().should('be.visible')

        cy.window().then((win) =>{
            cy.stub(win, 'open', url => {
                win.location.href = 'http://www.qaclickacademy.com/'
            }).as ('windowOpen')
        })
        pageObjects.getNewWindow().click()
        cy.get('@windowOpen').should('be.calledWith', 'http://www.qaclickacademy.com/')
    }

    newTab(){
        pageObjects.getNewTab().invoke('removeAttr','target').click()
    }

}

module.exports = new windowTab()
