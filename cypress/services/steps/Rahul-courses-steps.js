import PageObjects from '../../services/pages/RahulPage'
import testData from '../../fixtures/testData.json'

const pageObjects = new PageObjects()


class coursesSteps {

    coursesVisibleInNavigation() {

        pageObjects.getCoursesHeadTitle().should('be.visible')
        cy.wait(1000)
    }

    assertCouresList() {
        const courseList = pageObjects.getCourseList();
        let numberOfClicks = 5;

        pageObjects.getCourseList().each(($el, i) => {
            if ( Math.floor(Math.random() * 12) === i) {
                cy.wrap($el).click()
            }
        })

        // for (let index = 0; index <= numberOfClicks; index++) {
        //     courseList.eq(Math.floor(Math.random() * 11)).click()
        //         cy.go('back')
        //     }
    }

    clickingOneCourse(texts){
        pageObjects.getCourseList().each(($els) =>{
            if($els.text() === texts){
                cy.wrap($els).click()
            }
        })
    }

    assertFaqCourses() {
        pageObjects.getFaqSection().scrollIntoView()
        pageObjects.getFaqSection().contains('Frequently Asked Questions')
    }

    assertCourseCopyright() {
        pageObjects.getCopyrightFooter().scrollIntoView()
        pageObjects.getCopyrightFooter().should('contain.text', 'All Right Reserved RahulShettyAcademy © 2021')
    }

    assertCourseOnePic() {
        pageObjects.getCourseOnePic().scrollIntoView()
        pageObjects.getCourseOnePic().should('be.visible')
    }

    assertCourseTwoText(text) {
        pageObjects.getCourseTwoText().scrollIntoView()
        pageObjects.getCourseTwoText().should('contain.text', text)
    }

    assertCourseThreeBundle() {
        chai.config.truncateThreshold = 100 
        pageObjects.getCourseThreeBundle().scrollIntoView()
        .click()
        
        pageObjects.getCourseThreeBundleElement()
        .should('contain.text', 'Learn SQL in Practical + DataBase Testing from Scratch')

        const courseTitleList = testData.courseThreeDataList
        pageObjects.getCourseThreeBundleSubtitleList().then(($el) =>{
        return Cypress._.map($el, 'innerText')
        }).should('deep.equal', courseTitleList)
    }

}

module.exports = new coursesSteps()