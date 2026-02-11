// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// GET - Buscar device específico
Cypress.Commands.add('criarDevice', (body) => {
  return cy.request({
    method: 'POST',
    url: '/objects',
    failOnStatusCode: false,
    body
  })
})

Cypress.Commands.add('buscarDeviceEspecifico', (deviceId) => {
  return cy.request({
    method: 'GET',
    url: `/objects/${deviceId}`,
    failOnStatusCode: false
  })
})

Cypress.Commands.add('atualizarDevice', (deviceId, body) => {
  return cy.request({
    method: 'PUT',
    url: `/objects/${deviceId}`,
    failOnStatusCode: false,
    body
  })
})

Cypress.Commands.add('deletarDevice', (deviceId) => {
  return cy.request({
    method: 'DELETE',
    url: `/objects/${deviceId}`,
    failOnStatusCode: false
  })
})


    



//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })