import customerPages from '../../pages/customerPages';
import customers from '../../fixtures/customers.json';
import users from '../../fixtures/users.json';

describe('Update Customer Test kasirAja', () => {
    beforeEach(() => {
        cy.login(users.loginUser.email, users.loginUser.password);
        cy.url().should('include','/dashboard');
        customerPages.visit();
    });

    it('Update Customer Berhasil', () => {
        // customerPages.search(customers.dataCust2.name);
        customerPages.clickEdit(customers.dataCust1.name);
        customerPages.fillName(customers.dataCustUpd1.name);
        customerPages.fillPhone(customers.dataCustUpd1.phone);
        customerPages.fillAddress(customers.dataCustUpd1.address);
        customerPages.fillDescription(customers.dataCustUpd1.description);
        customerPages.submit();

        customerPages.getAlert().should('be.visible');
    });

});