class registerPages{
    visit(){
        cy.visit('/register');
    }

    fillName(name){
        cy.get('input[id="name"]').clear().type(name);
    }

    fillEmail(email){
        cy.get('input[id="email"]').clear().type(email);
    }

    fillPassword(password){
        cy.get('input[id="password"]').clear().type(password);
    }

    submit(){
        cy.get('button[type="submit"]').click();
    }

    clickEyeClose(){
        cy.get('button svg[data-icon="eye-slash"]').click();
    }

    getErrorMessage(){
        return cy.get('.chakra-alert');
    }
}

export default new registerPages();