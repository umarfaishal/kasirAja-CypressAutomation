import cashierPages from '../../pages/cashierPages';
import cashiers from '../../fixtures/cashiers.json';
import users from '../../fixtures/users.json';

describe('Update Cashier Test kasirAja', () => {
    let random;
      beforeEach(() => {
          random = Math.random().toString(36).substring(2, 10);
          cy.login(users.loginUser.email, users.loginUser.password);
          cy.wait(2000);
          cy.url().should('include','/dashboard');
          cashierPages.visit();
      });

    it('Update Cashier Berhasil', () => {
        // cashierPages.search(cashiers.dataCash1.name);
        cashierPages.clickEdit(cashiers.dataCash1.name);
        cashierPages.fillName(cashiers.dataCashUpd1.name);
        cashierPages.fillEmail(`${random}@mail.com`);
        cashierPages.fillPassword(cashiers.dataCashUpd1.password);
        cashierPages.submit();

        cashierPages.getAlert().should('be.visible');
    });

});