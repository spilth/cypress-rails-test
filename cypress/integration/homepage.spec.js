/// <reference types="cypress" />

context('Homepage', () => {
    it('displays the rails message', () => {
        cy.visit('/')
        cy.get('h1').should('have.text', 'Yay! You’re on Rails!')
    })
})
