class salesPages{
    visit(){
        cy.visit('/sales');
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
    }

    selectCust(customer){
        cy.get('input[id="pelanggan"]')
        .click({force:true});

        cy.contains(customer)
        .click({force:true});
    }

    deleteProduct(name){
        cy.contains('tr', name)
        .find('td:nth-child(6) svg')
        .click({force:true});
        // .trigger('click', {force:true});
    }

    deleteCust(){
        cy.get('div.css-1eyj61a svg').click({force: true});
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

    fillDiskon(disc){
        cy.get('input[id="diskon"]').clear().type(disc);
    }
    
    fillPay(payment){
        cy.get('input[placeholder*="jumlah bayar"]').clear().type(payment);
    }

    totalPay(){
        return cy.get('div:nth-child(2) h2');
    }

    submit(){
        cy.contains('Bayar').click();
    }

    confirm(){
        cy.contains('Ya').click();
    }

    getAlert(){
        return cy.get('.chakra-alert');
    }
}

export default new salesPages();