import customerPages from '../../pages/customerPages';
import customers from '../../fixtures/customers.json';
import users from '../../fixtures/users.json';

describe('Create Customer Test kasirAja', () => {
    beforeEach(() => {
        cy.login(users.loginUser.email, users.loginUser.password);
        cy.url().should('include','/dashboard');
        customerPages.visit();
    });

    it('Tambah Customer Berhasil', () => {
        customerPages.clickAddCustomer();
        customerPages.fillName(customers.dataCust1.name);
        customerPages.fillPhone(customers.dataCust1.phone);
        customerPages.fillAddress(customers.dataCust1.address);
        customerPages.fillDescription(customers.dataCust1.description);
        customerPages.submit();

        customerPages.getAlert().should('be.visible');
    });

    it('Tambah Customer format nomer hp +62', () => {
        customerPages.clickAddCustomer();
        customerPages.fillName(customers.dataCust2.name);
        customerPages.fillPhone(customers.dataCust2.phone);
        customerPages.fillAddress(customers.dataCust2.address);
        customerPages.fillDescription(customers.dataCust2.description);
        customerPages.submit();

        customerPages.getAlert().should('be.visible');
    });

    it('Tambah Customer format nomer hp ada penengah(-)', () => {
        customerPages.clickAddCustomer();
        customerPages.fillName(customers.dataCustUpd2.name);
        customerPages.fillPhone(customers.dataCustUpd2.phone);
        customerPages.fillAddress(customers.dataCustUpd2.address);
        customerPages.fillDescription(customers.dataCustUpd2.description);
        customerPages.submit();

        customerPages.getAlert().should('be.visible');
    });

    it('Tambah Customer field nama kosong', () => {
        customerPages.clickAddCustomer();
        customerPages.fillPhone(customers.dataCust1.phone);
        customerPages.fillAddress(customers.dataCust1.address);
        customerPages.fillDescription(customers.dataCust1.description);
        customerPages.submit();

        customerPages.getAlert().should('be.visible');
    });

    it('Tambah Customer hanya isi data nama', () => {
        customerPages.clickAddCustomer();
        customerPages.fillName(customers.dataCustUpd2.name);
        customerPages.submit();

        customerPages.getAlert().should('be.visible');
    });

});