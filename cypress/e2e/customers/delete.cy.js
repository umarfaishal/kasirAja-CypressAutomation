import customerPages from '../../pages/customerPages';
import customers from '../../fixtures/customers.json';
import users from '../../fixtures/users.json';

describe('Delete Customer Test kasirAja', () => {
    beforeEach(() => {
        cy.login(users.loginUser.email, users.loginUser.password);
        cy.url().should('include','/dashboard');
        customerPages.visit();
    });

    it('Delete Customer Berhasil', () => {
        // customerPages.search(customers.dataCustUpd2.name);
        customerPages.clickDelete(customers.dataCustUpd2.name);

        customerPages.confirmDelete();

        customerPages.getAlert().should('be.visible');
    });

    it('Batal Delete Customer Berhasil', () => {
        customerPages.search(customers.dataCustUpd1.name);
        customerPages.clickDelete(customers.dataCustUpd1.name);

        customerPages.cancelDelete();
    });

});