class productPages{
    visit(){
        cy.visit('/products');
    }

    clickAddProduct(){
        cy.contains('tambah').click();
    }

    fillName(name){
        cy.get('input[id="nama"]').clear().type(name);
    }

    fillDescription(description){
        cy.get('input[id="deskripsi"]').clear().type(description);
    }

    selectCategory(category){
        cy.get('input#kategori').click({force:true});
        cy.contains(category).click({force:true});
    }

    fillPurchasePrice(price){
        cy.get('input[id="harga beli"]').clear().type(price);
    }

    fillSellingPrice(price){
        cy.get('input[id="harga jual"]').clear().type(price);
    }

    fillStock(stock){
        cy.get('input[id="stok"]').clear().type(stock);
    }

    submit(){
        cy.contains('simpan').click();
    }

    search(name){
        cy.get('input[placeholder="cari"]').clear().type(name);
    }

    clickEdit(name){
        cy.contains(name)
            .parents('tr')
            .within(() => {
                cy.get('button').eq(0).click({ force: true }); // buka menu
            });

        cy.contains('ubah', { matchCase: false }).click({ force: true });
    }

    clickDelete(name){
        cy.contains(name)
            .parents('tr')
            .within(() => {
                cy.get('button').eq(1).click({ force: true }); // buka menu
            });

        cy.contains('hapus', { matchCase: false }).click({ force: true });
    }

    confirmDelete(){
        cy.contains('Delete').click({ force: true });
    }

    cancelDelete(){
        cy.contains('batal').click({force:true});
    }

    getAlert(){
        return cy.get('.chakra-alert');
    }
}

export default new productPages();