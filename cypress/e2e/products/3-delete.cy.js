import productPages from '../../pages/productPages';
import products from '../../fixtures/products.json';
import users from '../../fixtures/users.json';

describe('Delete Product Test kasirAja', () => {
    beforeEach(() => {
        cy.login(users.loginUser.email, users.loginUser.password);
        cy.wait(2000);
        cy.url().should('include','/dashboard');
        productPages.visit();
    });

    it('Hapus Produk Berhasil', () => {
        productPages.search('Fanta');
        productPages.clickDelete('Fanta');
        productPages.confirmDelete();

        productPages.getAlert().should('be.visible');
    });

    it('Batal Hapus Produk ', () => {
        productPages.search('Mie Rendang');
        productPages.clickDelete('Mie Rendang');
        productPages.cancelDelete();
    });

});