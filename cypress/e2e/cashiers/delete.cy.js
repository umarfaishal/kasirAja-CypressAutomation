import cashierPages from '../../pages/cashierPages';
import cashiers from '../../fixtures/cashiers.json';
import users from '../../fixtures/users.json';

describe('Delete Cashier Test kasirAja', () => {
      beforeEach(() => {
          cy.login(users.loginUser.email, users.loginUser.password);
          cy.url().should('include','/dashboard');
          cashierPages.visit();
      });

    it('Delete Cashier Berhasil', () => {
        // cashierPages.search(cashiers.dataCashUpd1.name);
        cashierPages.clickDelete(cashiers.dataCashUpd1.name);
        cashierPages.confirmDelete();

        cashierPages.getAlert().should('be.visible');
    });

    it('Batal Delete Cashier Berhasil', () => {
        // cashierPages.search(cashiers.dataCash2.name);
        cashierPages.clickDelete(cashiers.dataCash2.name);
        cashierPages.cancelDelete();
    });

});