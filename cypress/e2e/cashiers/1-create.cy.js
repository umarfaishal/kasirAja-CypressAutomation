import cashierPages from '../../pages/cashierPages';
import cashiers from '../../fixtures/cashiers.json';
import users from '../../fixtures/users.json';

describe('Create Cashier Test kasirAja', () => {
    let random;
      beforeEach(() => {
          random = Math.random().toString(36).substring(2, 10);
          cy.login(users.loginUser.email, users.loginUser.password);
          cy.wait(2000);
          cy.url().should('include','/dashboard');
          cashierPages.visit();
      });

    it('Tambah Cashier Berhasil', () => {
        cashierPages.clickAddCashier();
        cashierPages.fillName(cashiers.dataCash1.name);
        cashierPages.fillEmail(`${random}@mail.com`);
        cashierPages.fillPassword(cashiers.dataCash1.password);
        cashierPages.submit();

        cashierPages.getAlert().should('be.visible');
    });

    it('Tambah Cashier field nama kosong', () => {
        cashierPages.clickAddCashier();
        cashierPages.fillEmail(`${random}@mail.com`);
        cashierPages.fillPassword(cashiers.dataCash2.password);
        cashierPages.submit();

        cashierPages.getAlert().should('be.visible');
    });

    it('Tambah Cashier field email kosong', () => {
        cashierPages.clickAddCashier();
        cashierPages.fillName(cashiers.dataCash1.name);
        cashierPages.fillPassword(cashiers.dataCash1.password);
        cashierPages.submit();

        cashierPages.getAlert().should('be.visible');
    });

    it('Tambah Cashier field password kosong', () => {
        cashierPages.clickAddCashier();
        cashierPages.fillName(cashiers.dataCash1.name);
        cashierPages.fillEmail(`${random}@mail.com`);
        cashierPages.submit();

        cashierPages.getAlert().should('be.visible');
    });

    it('Tambah Cashier email sudah ada', () => {
        cashierPages.clickAddCashier();
        cashierPages.fillName(cashiers.dataCash1.name);
        cashierPages.fillEmail(cashiers.dataCash1.email);
        cashierPages.fillPassword(cashiers.dataCash1.password);
        cashierPages.submit();

        cashierPages.getAlert().should('be.visible');
    });

    it('Tambah Cashier field kosong', () => {
        cashierPages.clickAddCashier();
        cashierPages.submit();

        cashierPages.getAlert().should('be.visible');
    });

});