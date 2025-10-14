class purchasePages{
    visit(){
        cy.visit('/purchases');
    }

    clickAddPurchase(){
        cy.contains('tambah').click();
    }

    clickProductBtn(){
        cy.contains('button','produk').click();
    }

    selectProduct(productName){
        cy.contains(productName, {timeout: 5000})
        .should('be.visible')
        .click({force: true});
    }

    // selectMultipleProduct(productName){
    //     productName.forEach((name) => {
    //         this.clickProductBtn();
    //         this.selectProduct(name);
    //     });
    // }

    searchProd(name){
        cy.get('input[placeholder="cari produk"]').clear().type(name);
    }

    searchPop(name){
        cy.get('input[placeholder="cari"]').clear().type(name);
    }
    
    selectCategory(category){
        cy.get('input[placeholder="kategori"]')
        .click({force:true});

        cy.contains(category)
        .click({force:true});

        cy.get('input[placeholder="kategori"]')
        .clear({force:true});
    }

    deleteProduct(name){
        cy.contains('tr', name)
        .find('td:nth-child(6) svg')
        .click({force:true});
        // .trigger('click', {force:true});
    }

    fillQty(productName, qty){
        cy.contains('tr', productName)
        .find('input[type="number"]')
        .clear()
        .type(qty);
    }

    fillNotes(note){
        cy.get('textarea[placeholder="catatan"]').clear().type(note);
    }    

    submit(){
        cy.contains('Simpan').click();
    }

    getAlert(){
        return cy.get('.chakra-alert');
    }
}

export default new purchasePages();