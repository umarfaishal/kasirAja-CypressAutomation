import categoryPages from '../../pages/categoryPages';
import categories from '../../fixtures/categories.json';
import users from '../../fixtures/users.json';

describe('Update Category Test kasirAja', () => {
    beforeEach(() => {
        cy.login(users.loginUser.email, users.loginUser.password);
        cy.wait(2000);
        cy.url().should('include','/dashboard');
        categoryPages.visit();
    });

    it('Ubah Kategori Berhasil', () => {
        // categoryPages.search('Minuman Segar');
        categoryPages.clickEdit('Makanan Instan');
        categoryPages.fillName(categories.dataKategori1.name);
        categoryPages.fillDescription(categories.dataKategori1.description);
        categoryPages.submit();

        categoryPages.getAlert().should('be.visible');
    });
});