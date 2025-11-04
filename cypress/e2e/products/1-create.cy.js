import productPages from '../../pages/productPages';
import products from '../../fixtures/products.json';
import users from '../../fixtures/users.json';
import categories from '../../fixtures/categories.json';

describe('Create Product Test kasirAja', () => {
    beforeEach(() => {
        cy.login(users.loginUser.email, users.loginUser.password);
        cy.wait(2000);
        cy.url().should('include','/dashboard');
        productPages.visit();
    });

    it('Tambah Produk Berhasil', () => {
        productPages.clickAddProduct();
        productPages.fillName(products.dataProduk1.name);
        productPages.fillDescription(products.dataProduk1.description);
        productPages.fillPurchasePrice(products.dataProduk1.purchasePrice);
        productPages.fillSellingPrice(products.dataProduk1.sellingPrice);
        productPages.fillStock(products.dataProduk1.stok);
        productPages.selectCategory(categories.dataKategori1.name);
        productPages.submit();

        productPages.getAlert().should('be.visible');
    });

    it('Tambah Produk field kosong', () => {
        productPages.clickAddProduct();
        productPages.submit();

        productPages.getAlert().should('be.visible');
    });

    it('Tambah Produk field harga beli kosong', () => {
        productPages.clickAddProduct();
        productPages.fillName(products.dataProduk1.name);
        productPages.fillDescription(products.dataProduk1.description);
        productPages.fillSellingPrice(products.dataProduk1.sellingPrice);
        productPages.fillStock(products.dataProduk1.stok);
        productPages.selectCategory(categories.dataKategori1.name);
        productPages.submit();

        productPages.getAlert().should('be.visible');
    });

    it('Tambah Produk harga beli > harga jual', () => {
        productPages.clickAddProduct();
        productPages.fillName(products.dataProduk2.name);
        productPages.fillDescription(products.dataProduk2.description);
        productPages.fillPurchasePrice(products.dataProduk2.purchasePrice);
        productPages.fillSellingPrice(products.dataProduk2.sellingPrice);
        productPages.fillStock(products.dataProduk2.stok);
        productPages.selectCategory(categories.dataKategori2.name);
        productPages.submit();

        productPages.getAlert().should('be.visible');
    });

    it('Tambah Produk tidak pilih kategori', () => {
        productPages.clickAddProduct();
        productPages.fillName(products.dataProduk1.name);
        productPages.fillDescription(products.dataProduk1.description);
        productPages.fillPurchasePrice(products.dataProduk1.purchasePrice);
        productPages.fillSellingPrice(products.dataProduk1.sellingPrice);
        productPages.fillStock(products.dataProduk1.stok);
        productPages.submit();

        productPages.getAlert().should('be.visible');
    });

    it('Tambah Produk stok = 0', () => {
        productPages.clickAddProduct();
        productPages.fillName(products.dataProduk3.name);
        productPages.fillDescription(products.dataProduk3.description);
        productPages.fillPurchasePrice(products.dataProduk3.purchasePrice);
        productPages.fillSellingPrice(products.dataProduk3.sellingPrice);
        productPages.fillStock(products.dataProduk3.stok);
        productPages.selectCategory(categories.dataKategori1.name);
        productPages.submit();

        productPages.getAlert().should('be.visible');
    });

    it('Tambah Produk field nama kosong', () => {
        productPages.clickAddProduct();
        productPages.fillDescription(products.dataProduk1.description);
        productPages.fillPurchasePrice(products.dataProduk1.purchasePrice);
        productPages.fillSellingPrice(products.dataProduk1.sellingPrice);
        productPages.fillStock(products.dataProduk1.stok);
        productPages.selectCategory(categories.dataKategori1.name);
        productPages.submit();

        productPages.getAlert().should('be.visible');
    });

    it('Tambah Produk field harga jual kosong', () => {
        productPages.clickAddProduct();
        productPages.fillName(products.dataProduk1.name);
        productPages.fillDescription(products.dataProduk1.description);
        productPages.fillPurchasePrice(products.dataProduk1.purchasePrice);
        productPages.fillStock(products.dataProduk1.stok);
        productPages.selectCategory(categories.dataKategori1.name);
        productPages.submit();

        productPages.getAlert().should('be.visible');
    });
});