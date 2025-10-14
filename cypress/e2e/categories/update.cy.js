import categoryPages from '../../pages/categoryPages';
import categories from '../../fixtures/categories.json';
import users from '../../fixtures/users.json';

describe('Update Category Test kasirAja', () => {
    beforeEach(() => {
        cy.login(users.loginUser.email, users.loginUser.password);
        cy.url().should('include','/dashboard');
        categoryPages.visit();
    });

    it('Ubah Kategori Berhasil', () => {
        // categoryPages.search('Minuman Segar');
        categoryPages.clickEdit('Minuman Segar');
        categoryPages.fillName(categories.dataKategoriUpd1.name);
        categoryPages.fillDescription(categories.dataKategoriUpd1.description);
        categoryPages.submit();

        categoryPages.getAlert().should('be.visible');
    });
});