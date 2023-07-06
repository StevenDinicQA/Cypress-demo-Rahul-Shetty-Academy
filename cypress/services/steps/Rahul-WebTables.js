import PageObjects from '../../services/pages/RahulPage'

const pageObjects = new PageObjects()

class webTables{

    checkWebTable(){
        pageObjects.getWebtables().should('be.visible')
    }

    checkColumnOne(){
        const getNames = ($el => {
            return Cypress._.map($el, 'innerText')
        }) 
        const names = ['Alex','Ben','Dwayne','Ivory','Jack','Joe','Raymond','Ronaldo','Smith']
        pageObjects.getColumnOne()
            .then(getNames)
            .should('deep.equal', names)
    }    

    checkColumnTwo(){
        const getPosition = ($el =>{
            return Cypress._.map($el, 'innerText')
        })
        const position = ['Engineer','Mechanic','Manager','Receptionist', 'Engineer','Postman','Businessman','Sportsman','Cricketer']
        pageObjects.getColumnTwo()
            .then(getPosition)
            .should('deep.equal', position)
    }    

    checkColumnThree(){
        const getCity = ($el =>{
            return Cypress._.map($el, 'innerText')
        })
        const cities = ['Chennai','Bengaluru','Kolkata','Chennai','Pune','Chennai','Mumbai','Chennai','Delhi']
        pageObjects.getColumnThree()
            .then(getCity)
            .should('deep.equal', cities)

    }    

    checkColumnFour(){
        const getAmount = ($el =>{
            return Cypress._.map($el, 'innerText')
        })
        const amount = ['28','23','48','18','32','46','37','31','33']
        pageObjects.getColumnFour()
            .then(getAmount)
            .should('deep.equal', amount)
    }    



}

module.exports = new webTables()