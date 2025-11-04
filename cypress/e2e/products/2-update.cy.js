import productPages from '../../pages/productPages';
import products from '../../fixtures/products.json';
import users from '../../fixtures/users.json';
import categories from '../../fixtures/categories.json';

describe('Update Product Test kasirAja', () => {
    beforeEach(() => {
        cy.login(users.loginUser.email, users.loginUser.password);
        cy.wait(2000);
        cy.url().should('include','/dashboard');
        productPages.visit();
    });

    it('Ubah Produk Berhasil', () => {
        // productPages.search('Oreo');
        productPages.clickEdit('Oreo');
        productPages.fillName(products.dataProduk2.name);
        productPages.fillPurchasePrice(products.dataProduk2.purchasePrice);
        productPages.fillSellingPrice(products.dataProduk2.sellingPrice);
        productPages.fillStock(products.dataProduk2.stok);
        productPages.selectCategory(categories.dataKategoriUpd1.name);
        productPages.submit();

        productPages.getAlert().should('be.visible');
    });

});