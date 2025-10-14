Cypress.Commands.add('login', (email, password) => {
    cy.visit('/login');
    cy.get('input[id="email"]').type(email);
    cy.get('input[id="password"]').type(password);
    cy.get('button[type="submit"]').click();
});

// Cypress.Commands.add('registerRand', (password) => {
//     const random = Math.floor(Math.random() * 100000);
//     const name = `User${random}`;
//     const email = `user${random}@mail.com`;

//     cy.get('input[id="name"]').type(name);
//     cy.get('input[id="email"]').type(email);
//     cy.get('input[id="password"]').type(password);
//     cy.get('button[type="submit"').click();
// });

// Cypress.Commands.add('register', (name, email, password) => {
//     cy.get('input[id="name"]').type(name);
//     cy.get('input[id="email"]').type(email);
//     cy.get('input[id="password"]').type(password);
//     cy.get('button[type="submit"').click();
// });