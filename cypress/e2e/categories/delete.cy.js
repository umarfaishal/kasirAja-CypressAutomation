import categoryPages from '../../pages/categoryPages';
import categories from '../../fixtures/categories.json';
import users from '../../fixtures/users.json';

describe('Update Category Test kasirAja', () => {
    beforeEach(() => {
        cy.login(users.loginUser.email, users.loginUser.password);
        cy.url().should('include','/dashboard');
        categoryPages.visit();
    });

    it('Hapus Kategori Berhasil', () => {
        // categoryPages.search('Makanan Instan');
        categoryPages.clickDelete('Makanan Instan');
        categoryPages.confirmDelete();

        categoryPages.getAlert().should('be.visible');
    });

    it('Batal Hapus Kategori', () => {
        categoryPages.search('Minuman Segar');
        categoryPages.clickDelete('Minuman Segar');
        categoryPages.cancelDelete();
    });

});