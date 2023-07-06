import PageObjects from '../../services/pages/RahulPage'

const pageObjects = new PageObjects()

class dropdownSteps{

    selectDropdownOption(){
        pageObjects.getDropdown().select('option2')
        pageObjects.getDropdown().should('have.value', 'option2')
    }

}
module.exports = new dropdownSteps()