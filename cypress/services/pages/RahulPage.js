import RahulLocators from '../../selectors/RahulSelectors.json'

class PageObjects{
    
    // radio buttons
    getRadioBox(){
        return cy.get(RahulLocators.radioBtnList)
    }

    getRadio1(){
        return cy.get(RahulLocators.radioBtn1)
    }

    getRadio2(){
        return cy.get(RahulLocators.radioBtn2)
    }

    getRadio3(){
        return cy.get(RahulLocators.radioBtn3)
    }

    // countries list
    getCountries(){
        return cy.get(RahulLocators.countries)
    }

    getCountriesList(){
        return cy.get(RahulLocators.countriesList)
    }

    getCountriesArray(){
        return cy.get(RahulLocators.countriesArray)
    }

    // dropdown
    getDropdown(){
        return cy.get(RahulLocators.dropdown)
    }

    // checkbox
    getCheckboxList(){
        return cy.get(RahulLocators.checkBoxList)
    }

    getOption1(){
        return cy.get(RahulLocators.option1)
    }

    getOption2(){
        return  cy.get(RahulLocators.option2)
    }

    getOption3(){
        return cy.get(RahulLocators.option3)
    }

    // windows and tabs
    getNewWindow(){
        return cy.get(RahulLocators.openNewWindow)
    }

    getNewTab(){
        return cy.get(RahulLocators.openNewTab)
    }

    // alerts and confirms
    getAlertsBox(){
        return cy.get(RahulLocators.alertsBox)
    }

    getAlertsName(){
        return cy.get(RahulLocators.alertsName)
    }

    getAlertsBtn(){
        return cy.get(RahulLocators.alertBtn)
    }

    getConfirmBtn(){
        return cy.get(RahulLocators.confirmBtn)
    }

    // show/hide textbox
    getRightField(){
        return cy.get(RahulLocators.rightFieldSet)
    }

    getHideTextBox(){
        return cy.get(RahulLocators.hideTextBox)
    }

    getShowTextBox(){
        return cy.get(RahulLocators.showTextBox)
    }

    getDisplayedText(){
        return cy.get(RahulLocators.displayedText)
    }

    // web-tables
    getWebtables(){
        return cy.get(RahulLocators.webTable)
    }

    getColumnOne(){
        return cy.get(RahulLocators.column1)
    }
    
    getColumnTwo(){
        return cy.get(RahulLocators.column2)
    }
    
    getColumnThree(){
        return cy.get(RahulLocators.column3)
    }
    
    getColumnFour(){
        return cy.get(RahulLocators.column4)
    }

    // mouse-hover
    getMouseOver(){
        return cy.get(RahulLocators.mouseOver)
    }

    getMouseOverContent(){
        return cy.get(RahulLocators.mouseOverContent)
    }

    getMouseTop(){
        return cy.get(RahulLocators.mouseTop)
    }

    getMouseReload(){
        return cy.get(RahulLocators.mouseReload)
    }

    // iframe
    getIFrame(){
        return cy.get(RahulLocators.iframe)
    }

    //courses

    getCoursesHeadTitle(){
        return cy.get(RahulLocators.headerTitle)
    }

    getCourseHeadline(){
        return cy.get(RahulLocators.courseHeadline)
    }

    getCourseList(){
        return cy.get(RahulLocators.courseList)
    }

    getCourseTitle(){
        return cy.get(RahulLocators.courseTitle)
    }

    getCourseOnePic(){
        return cy.get(RahulLocators.courseOnePic)
    }

    getFaqSection(){
        return cy.get(RahulLocators.faqSection)
    }

    getGetStarted(){
        return cy.get(RahulLocators.getStarted)
    }

    getCopyrightFooter(){
        return cy.get(RahulLocators.copyrightFooter)
    }

    getCourseTwoText(){
        return cy.get(RahulLocators.courseTwoText)
    }

    getCourseThreeBundle(){
        return cy.get(RahulLocators.courseThreeBundle)
    }

    getCourseThreeBundleSubtitleList(){
        return cy.get(RahulLocators.courseThreeBundleSubtitlesList)
    }

    getCourseThreeBundleElement(){
        return cy.get(RahulLocators.courseThreeBundleElement)
    }

}

export default PageObjects
