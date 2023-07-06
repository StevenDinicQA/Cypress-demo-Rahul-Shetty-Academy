import PageObjects from '../../services/pages/RahulPage'

const pageObjects = new PageObjects()

class countriesSteps{

    selectingCountry(){
    pageObjects.getCountries().type('Coo')
    pageObjects.getCountries().type('{enter}')
    pageObjects.getCountriesList().should('contain', 'Cook Islands')
    
    }

    clearSelect(){
        pageObjects.getCountries().clear()
    }

    selectCountryArray(){
        const getTexts = ($el => {
            return Cypress._.map($el, 'innerText')
        })
     const countries = ['Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo', 'Congo, the Democratic Republic of the', 'Cook Islands',
             'Costa Rica', 'Cote d\'Ivoire','Mexico', 'Monaco', 'Morocco', 'Puerto Rico', 'Turks and Caicos Islands']
        let array = []
        pageObjects.getCountries().type('Co')
        pageObjects.getCountriesArray()
         .then(getTexts)
        .should('deep.equal', countries)
    }

}

module.exports = new countriesSteps()