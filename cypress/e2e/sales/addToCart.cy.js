import salesPages from '../../pages/salesPages';
import products from '../../fixtures/products.json';
import users from '../../fixtures/users.json';
import categories from '../../fixtures/categories.json';

describe('Add Sales Test kasirAja', () => {
    beforeEach(() => {
        cy.login(users.loginUser.email, users.loginUser.password);
        cy.url().should('include','/dashboard');
        salesPages.visit();
    });

    it('Add Sales 1 produk cari manual', () => {
        const produkNama = products.dataProduk1.name;

        salesPages.clickAddPurchase();
        salesPages.clickProductBtn();
        salesPages.selectProduct(produkNama);
    });

    it('Add Sales banyak produk cari manual', () => {
        const produkPilih = [
            products.dataProduk2.name,
            products.dataProduk3.name,
            products.dataProdukUpd1.name
        ];

        salesPages.clickAddPurchase();

        produkPilih.forEach((namaProduk) => {
            salesPages.clickProductBtn();
            salesPages.selectProduct(namaProduk);
        });
    });

    it('Add Sales ketik dari pop up produk', () => {
        const produkPilih = [
            products.dataProduk2.name,
            products.dataProduk3.name,
            products.dataProdukUpd1.name
        ];

        salesPages.clickAddPurchase();

        produkPilih.forEach((namaProduk) => {
            salesPages.clickProductBtn();
            salesPages.searchPop(namaProduk);
            salesPages.selectProduct(namaProduk);
        });
    });

    it('Add Sales filter kategori dari pop up produk', () => {
        const produkPilih = 
            products.dataProduk1.name;

        const kategoriPilih = categories.dataKategori1.name;
       salesPages.clickAddPurchase();

        salesPages.clickProductBtn();
        salesPages.selectCategory(kategoriPilih);
        cy.wait(500);
        salesPages.selectProduct(produkPilih);
    });

    it('Delete produk dari cart', () => {
        const produkPilih = [
            products.dataProduk2.name,
            products.dataProduk3.name,
            products.dataProdukUpd1.name
        ];

        salesPages.clickAddPurchase();

        produkPilih.forEach((namaProduk) => {
            salesPages.clickProductBtn();
            salesPages.selectProduct(namaProduk);
        });

        salesPages.deleteProduct(products.dataProduk3.name);
    });
});