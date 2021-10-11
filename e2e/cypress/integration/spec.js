it('loads page', () => {
  cy.visit('/');
  cy.contains(' Learn React');
});
