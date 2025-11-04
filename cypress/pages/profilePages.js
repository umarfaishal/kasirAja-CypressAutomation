class profilePages{
    visit(){
        cy.visit('/users');
    }

    clickProfile(){
        cy.get('button.chakra-menu__menu-button').click();
    }

    dropdown(){
        cy.get('div[id^="menu-list"]').should('be.visible');
    }

    editProfile(){
        cy.wait(500)
        cy.get('a.chakra-menu__menuitem[data-index="1"]').should('be.visible').click({force:true});
    }

    logout(){
        cy.contains('button', 'logout').click({force:true});
    }

    profilepg(){
        cy.contains('ubah', {timeout: 5000})
        .should('be.visible');
    }

    fillName(name){
        cy.get('input[id="nama"]').clear().type(name);
    }
    
    fillEmail(email){
        cy.get('input[id="email"]').clear().type(email);
    }

    eraseEmail(){
        cy.get('input[id="email"]').clear();
    }

    eraseName(){
        cy.get('input[id="nama"]').clear();
    }

    fillPassword(password){
        cy.get('input[id="password"]').clear().type(password);
    }

    submit(){
        cy.contains('simpan').click();
    }

    getAlert(){
        return cy.get('.chakra-alert');
    }
}

export default new profilePages();