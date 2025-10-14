import purchasePages from "../../pages/purchasePages";
import products from '../../fixtures/products.json';
import users from '../../fixtures/users.json';

describe('Add Purchase Note & Qty Test kasirAja', () => {
    beforeEach(() => {
        cy.login(users.loginUser.email, users.loginUser.password);
        cy.url().should('include','/dashboard');
        purchasePages.visit();
    });

    it('Add Purchase qty 1 produk', () => {
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

        purchasePages.fillQty(products.dataProduk2.name, 3);
    });

    it('Add Purchase qty banyak produk', () => {
        const produkPilih = [
            {name: products.dataProduk2.name, qty: 3},
            {name: products.dataProduk3.name, qty: 5},
            {name: products.dataProdukUpd1.name, qty: 2}
        ];

        purchasePages.clickAddPurchase();

        produkPilih.forEach((Produk) => {
            purchasePages.clickProductBtn();
            purchasePages.selectProduct(Produk.name);
        });

        produkPilih.forEach((Produk) => {
            purchasePages.fillQty(Produk.name, Produk.qty);
        });
    });

    it('Add Purchase notes', () => {
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

        purchasePages.fillNotes('Pembayaran Cash');
    });
});