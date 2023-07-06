// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-file-upload';
import 'cypress-iframe';
import '@cypress/xpath';
import '@4tw/cypress-drag-drop';
import "cypress-real-events";
import chaiJsonSchema from 'chai-json-schema'; 
chai.use(chaiJsonSchema);
// const registerCypressGrep = require('cypress-grep')
// registerCypressGrep()


const chaiSorted = require('chai-sorted');
chai.use(chaiSorted);

// Alternatively you can use CommonJS syntax:
// require('./commands')