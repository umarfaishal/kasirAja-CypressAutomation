import purchasePages from "../../pages/purchasePages";
import products from '../../fixtures/products.json';
import users from '../../fixtures/users.json';
import categories from '../../fixtures/categories.json';

describe('Add Purchase Test kasirAja', () => {
    beforeEach(() => {
        cy.login(users.loginUser.email, users.loginUser.password);
        cy.wait(2000);
        cy.url().should('include','/dashboard');
        purchasePages.visit();
    });

    it('Add Purchase 1 produk cari manual', () => {
        const produkNama = products.dataProduk1.name;

        purchasePages.clickAddPurchase();
        purchasePages.clickProductBtn();
        purchasePages.selectProduct(produkNama);
    });

    it('Add Purchase banyak produk cari manual', () => {
        const produkPilih = [
            products.dataProduk2.name,
            products.dataProduk3.name,
            products.dataProdukUpd1.name
        ];

        purchasePages.clickAddPurchase();

        produkPilih.forEach((namaProduk) => {
            purchasePages.clickProductBtn();
            purchasePages.selectProduct(namaProduk);
        });
    });

    it('Add Purchase ketik dari pop up produk', () => {
        const produkPilih = [
            products.dataProduk2.name,
            products.dataProduk3.name,
            products.dataProdukUpd1.name
        ];

        purchasePages.clickAddPurchase();

        produkPilih.forEach((namaProduk) => {
            purchasePages.clickProductBtn();
            purchasePages.searchPop(namaProduk);
            purchasePages.selectProduct(namaProduk);
        });
    });

    it('Add Purchase filter kategori dari pop up produk', () => {
        const produkPilih = 
            products.dataProduk1.name;

        const kategoriPilih = categories.dataKategori1.name;
        purchasePages.clickAddPurchase();

        purchasePages.clickProductBtn();
        purchasePages.selectCategory(kategoriPilih);
        cy.wait(500);
        purchasePages.selectProduct(produkPilih);
    });

    it('Delete produk dari cart', () => {
        const produkPilih = [
            products.dataProduk2.name,
            products.dataProduk3.name,
            products.dataProdukUpd1.name
        ];

        purchasePages.clickAddPurchase();

        produkPilih.forEach((namaProduk) => {
            purchasePages.clickProductBtn();
            purchasePages.selectProduct(namaProduk);
        });

        purchasePages.deleteProduct(products.dataProduk3.name);
    });
});