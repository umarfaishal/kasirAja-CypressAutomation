import registerPages from '../../pages/registerPages';
import users from '../../fixtures/users.json'

describe('Register Test kasirAja', () => {
    let random;
    beforeEach(() => {
        random = Math.random().toString(36).substring(2, 10);
        registerPages.visit();
    });

    it('Register success', () => {
        registerPages.fillName(`${random}`);
        registerPages.fillEmail(`${random}@mail.com`);
        registerPages.fillPassword(users.regisUser.password);
        registerPages.submit();

        cy.wait(2000);
        cy.url().should('include', '/login');
    });

    it('Register format email salah', () => {
        registerPages.fillName(users.regisUser.name);
        registerPages.fillEmail(`${random}`);
        registerPages.fillPassword(users.regisUser.password);
        registerPages.submit();

        registerPages.getErrorMessage().should('be.visible');
    });

    it('Register field password kosong', () => {
        registerPages.fillName(users.regisUser.name);
        registerPages.fillEmail(users.regisUser.email);
        registerPages.submit();

        registerPages.getErrorMessage().should('be.visible');
    });

    it('Register field email kosong', () => {
        registerPages.fillName(users.regisUser.name);
        registerPages.fillPassword(users.regisUser.password);
        registerPages.submit();

        registerPages.getErrorMessage().should('be.visible');
    });

    it('Register field nama kosong', () => {
        registerPages.fillEmail(`${random}@mail.com`);
        registerPages.fillPassword(users.regisUser.password);
        registerPages.submit();

        registerPages.getErrorMessage().should('be.visible');
    });

    it('Register field kosong', () => {
        registerPages.submit();

        registerPages.getErrorMessage().should('be.visible');
    });

    it('Register nama sama', () => {
        registerPages.fillName(users.regisUser.name);
        registerPages.fillEmail(`${random}@mail.com`);
        registerPages.fillPassword(users.regisUser.password);
        registerPages.submit();

        cy.contains('Nama sudah digunakan').should('be.visible');
    });

    it('Register lihat input password', () => {
        registerPages.fillName(`${random}`);
        registerPages.fillEmail(`${random}@mail.com`);
        registerPages.fillPassword(users.regisUser.password);
        registerPages.clickEyeClose();

        cy.get('input[id="password"]').should('have.attr', 'type', 'text');
        cy.get('button svg[data-icon="eye"]').should('exist');
    });

    it('Register email sama', () => {
        registerPages.fillName(`${random}`);
        registerPages.fillEmail(users.regisUser.email);
        registerPages.fillPassword(users.regisUser.password);
        registerPages.submit();

        registerPages.getErrorMessage().should('be.visible');
    });
});