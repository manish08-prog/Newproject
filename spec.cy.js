
it('my first test', () => {
 
    cy.visit('https://www.linkedin.com/')
   // Enter username
   cy.get("[name='email']").type('bunnywor');

   // Enter password
   cy.get("[name='pass']").type('bunny@ran');

   // Click the login button
   cy.get('button[type="submit"]').click();

   
})

