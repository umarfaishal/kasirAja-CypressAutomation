import purchasePages from "../../pages/purchasePages";
import products from '../../fixtures/products.json';
import users from '../../fixtures/users.json';

describe('Checkout Purchase Test kasirAja', () => {
    beforeEach(() => {
        cy.login(users.loginUser.email, users.loginUser.password);
        cy.wait(2000);
        cy.url().should('include','/dashboard');
        purchasePages.visit();
    });

    it('Checkout Purchase complete', () => {
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

        purchasePages.fillNotes('Pembayaran Cash');
        purchasePages.submit();
        purchasePages.getSuccessAlert().should('be.visible');
    });

    it('Checkout Purchase tanpa barang', () => {

        purchasePages.clickAddPurchase();
        purchasePages.submit();
        purchasePages.getAlert().should('be.visible');
    });

    it('Checkout Purchase tanpa catatan', () => {
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
        
        purchasePages.submit();
        purchasePages.getSuccessAlert().should('be.visible');
    });
    
});