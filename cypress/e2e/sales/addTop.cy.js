import salesPages from '../../pages/salesPages';
import products from '../../fixtures/products.json';
import users from '../../fixtures/users.json';
import customers from '../../fixtures/customers.json';

describe('Add Sales Note, Qty, Cust, disc, pay Test kasirAja', () => {
    beforeEach(() => {
        cy.login(users.loginUser.email, users.loginUser.password);
        cy.url().should('include','/dashboard');
        salesPages.visit();
    });

    it('Add Sales qty 1 produk', () => {
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

        salesPages.fillQty(products.dataProduk2.name, 3);
    });

    it('Add Sales qty banyak produk', () => {
        const produkPilih = [
            {name: products.dataProduk2.name, qty: 3},
            {name: products.dataProduk3.name, qty: 5},
            {name: products.dataProdukUpd1.name, qty: 2}
        ];

        salesPages.clickAddPurchase();

        produkPilih.forEach((Produk) => {
            salesPages.clickProductBtn();
            salesPages.selectProduct(Produk.name);
        });

        produkPilih.forEach((Produk) => {
            salesPages.fillQty(Produk.name, Produk.qty);
        });
    });

    it('Add Sales notes', () => {
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

        salesPages.fillNotes('Pembayaran Cash');
    });

    it('Add Sales discon', () => {
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

        salesPages.fillDiskon(10000);
    });    

    it('Add Sales pilih customer', () => {
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
        
        salesPages.selectCust(customers.dataCustUpd1.name);
    });

    it('Add Sales isi jumlah bayar', () => {
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
        
        salesPages.fillPay(70000);
    });
});