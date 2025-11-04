import categoryPages from '../../pages/categoryPages';
import categories from '../../fixtures/categories.json';
import users from '../../fixtures/users.json';

describe('Create Category Test kasirAja', () => {
    beforeEach(() => {
        cy.login(users.loginUser.email, users.loginUser.password);
        cy.wait(2000);
        cy.url().should('include','/dashboard');
        categoryPages.visit();
    });

    it('Tambah Kategori Berhasil', () => {
        categoryPages.clickAddCategory();
        categoryPages.fillName(categories.dataKategori2.name);
        categoryPages.fillDescription(categories.dataKategori2.description);
        categoryPages.submit();

        categoryPages.getAlert().should('be.visible');
    });

    it('Tambah Kategori hanya isi nama', () => {
        categoryPages.clickAddCategory();
        categoryPages.fillName(categories.dataKategori1.name);
        categoryPages.submit();

        categoryPages.getAlert().should('be.visible');
    });

    it('Tambah Kategori field nama kosong', () => {
        categoryPages.clickAddCategory();
        categoryPages.fillDescription(categories.dataKategori1.description);
        categoryPages.submit();

        categoryPages.getAlert().should('be.visible');
    });

    it('Tambah Kategori field kosong', () => {
        categoryPages.clickAddCategory();
        categoryPages.submit();

        categoryPages.getAlert().should('be.visible');
    });

});