/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Custom command to select a product
     * @example cy.selectProduct()
     */
    selectProduct(productName: String): Chainable<null>;
  }
}
