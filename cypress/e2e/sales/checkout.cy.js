import salesPages from '../../pages/salesPages';
import products from '../../fixtures/products.json';
import users from '../../fixtures/users.json';
import customers from '../../fixtures/customers.json';

describe('Checkout Purchase Test kasirAja', () => {
    beforeEach(() => {
        cy.login(users.loginUser.email, users.loginUser.password);
        cy.url().should('include','/dashboard');
        salesPages.visit();
    });

    it('Checkout Sales complete', () => {
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

        salesPages.fillNotes('Pembayaran Cash');
        salesPages.fillDiskon(10000);
        salesPages.selectCust(customers.dataCustUpd1.name);

        salesPages.totalPay().invoke('text').then((totalText) => {
            const totalBayar = parseInt(totalText.replace(/[^\d]/g, ''), 10);

            const bayar = totalBayar + 10000;

            salesPages.fillPay(bayar);

            salesPages.submit();

            salesPages.getAlert().should('be.visible');
        });
    });

    it('Checkout Sales tanpa barang', () => {

        salesPages.clickAddPurchase();
        salesPages.submit();
        salesPages.getAlert().should('be.visible');
    });
    

    it('Checkout Sales tanpa catatan', () => {
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

        salesPages.fillDiskon(10000);
        salesPages.selectCust(customers.dataCustUpd1.name);

        salesPages.totalPay().invoke('text').then((totalText) => {
            const totalBayar = parseInt(totalText.replace(/[^\d]/g, ''), 10);

            const bayar = totalBayar + 10000;

            salesPages.fillPay(bayar);

            salesPages.submit();

            salesPages.getAlert().should('be.visible');
        });
    });

    it('Checkout Sales tanpa diskon', () => {
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

        salesPages.fillNotes('Pembayaran Cash');
        salesPages.selectCust(customers.dataCustUpd1.name);

        salesPages.totalPay().invoke('text').then((totalText) => {
            const totalBayar = parseInt(totalText.replace(/[^\d]/g, ''), 10);

            const bayar = totalBayar + 10000;

            salesPages.fillPay(bayar);

            salesPages.submit();

            salesPages.getAlert().should('be.visible');
        });
    });
    
    it('Checkout Sales tanpa customer', () => {
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

        salesPages.fillNotes('Pembayaran Cash');
        salesPages.fillDiskon(10000);
        salesPages.deleteCust();

        salesPages.totalPay().invoke('text').then((totalText) => {
            const totalBayar = parseInt(totalText.replace(/[^\d]/g, ''), 10);

            const bayar = totalBayar + 10000;

            salesPages.fillPay(bayar);

            salesPages.submit();

            salesPages.getAlert().should('be.visible');
        });
    });

    it('Checkout Sales tanpa input jumlah bayar', () => {
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

        salesPages.fillNotes('Pembayaran Cash');
        salesPages.fillDiskon(10000);
        salesPages.selectCust(customers.dataCustUpd1.name);
        salesPages.submit();
        salesPages.confirm();
        salesPages.getAlert().should('be.visible');
    });

    it('Checkout Sales jumlah bayar < total bayar', () => {
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

        salesPages.fillNotes('Pembayaran Cash');
        salesPages.fillDiskon(10000);
        salesPages.selectCust(customers.dataCustUpd1.name);

        salesPages.totalPay().invoke('text').then((totalText) => {
            const totalBayar = parseInt(totalText.replace(/[^\d]/g, ''), 10);

            const bayarKurang = totalBayar - 10000;

            salesPages.fillPay(bayarKurang);

            salesPages.submit();

            salesPages.getAlert().should('be.visible');
        });
    });

});