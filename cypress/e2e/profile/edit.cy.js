import profilePages from "../../pages/profilePages";
import profile from '../../fixtures/profile.json';
import users from '../../fixtures/users.json';

describe('Edit Profile', () => {
    beforeEach(() => {
        cy.login(users.loginUser.email, users.loginUser.password);
        cy.wait(2000);
        cy.url().should('include','/dashboard');
        profilePages.visit();
    });

    it('Ubah data password', () => {
        profilePages.clickProfile();
        profilePages.dropdown();
        profilePages.editProfile();
        profilePages.profilepg();
        profilePages.fillPassword(profile.dataProfile.password);
        profilePages.submit();

        profilePages.getAlert().should('be.visible');
    });

    it('Ubah data nama toko', () => {
        profilePages.clickProfile();
        profilePages.dropdown();
        profilePages.editProfile();
        profilePages.profilepg();
        profilePages.fillName(profile.dataProfile.name);
        profilePages.submit();

        profilePages.getAlert().should('be.visible');
    });

    it('Ubah data email toko', () => {
        profilePages.clickProfile();
        profilePages.dropdown();
        profilePages.editProfile();
        profilePages.profilepg();
        profilePages.fillEmail(profile.dataProfile.email);
        profilePages.submit();

        profilePages.getAlert().should('be.visible');
    });

    it('field nama tidak diisi', () => {
        profilePages.clickProfile();
        profilePages.dropdown();
        profilePages.editProfile();
        profilePages.profilepg();
        profilePages.eraseName();
        profilePages.submit();

        profilePages.getAlert().should('be.visible');
    });

    it('field email tidak diisi', () => {
        profilePages.clickProfile();
        profilePages.dropdown();
        profilePages.editProfile();
        profilePages.profilepg();
        profilePages.eraseEmail();
        profilePages.submit();

        profilePages.getAlert().should('be.visible');
    });

    it('Logout sistem', () => {
        profilePages.clickProfile();
        profilePages.dropdown();
        profilePages.logout();

        cy.url().should('include','/login');
    });
    
});