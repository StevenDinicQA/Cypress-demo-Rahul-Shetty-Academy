const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 4500,
  chromeWebSecurity: false,
  reporter: "mochawesome",


  reporterOptions: {
    charts: true,
    overwrite: false,
    html: false,
    json: true,
    reportDir: "cypress/report/mochawesome-report",
  },

  e2e: {
    baseUrl: 'https://www.rahulshettyacademy.com/',
    specPattern: 'cypress/tests/**/*.cy.{js,jsx,ts,tsx}', 
    includeShadowDom: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    
    setupNodeEvents(on, config) {
      // console.log(config)
      // implement node event listeners here
      return config
      
    },
  },
});
