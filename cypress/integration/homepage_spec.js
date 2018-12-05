describe('Homepage', function() {
  it('tests that links work', function() {
    cy.visit('http://localhost:3000/')
    // cy.get('.name')
    //   .type('Jane Bond')
    // cy.get('.email')
    //   .type('myfakemail@gmail.com')
    cy.get('.password')
      .type('makersBnB_super_rocks')
      cy.contains('Log-in').click()
      cy.url()
        .should('include', '/log-in')
      cy.contains('Sign-up').click()
      cy.url()
        .should('include', 'sign-up')
  })
})