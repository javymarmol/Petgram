const { isType } = require("graphql")

/* global describe, it, cy */
describe('Petgram', function () {
  it('para ver si funciona', function () {
    cy.visit('/')
  })

  it('navegamos a una categoria y vemos fotos', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('podemos navegar con la navbar a la home', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })

  it('usuarios no registrados deben ver Log In and Register', function () {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})
