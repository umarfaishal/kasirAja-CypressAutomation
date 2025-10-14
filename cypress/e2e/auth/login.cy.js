import loginPages from '../../pages/loginPages';
import users from '../../fixtures/users.json';

describe('Login Test kasirAja', () => {
  let random;
  beforeEach(() => {
      random = Math.random().toString(36).substring(2, 10);
      loginPages.visit();
  });

    it('Login Success', () => {
      loginPages.fillEmail(users.loginUser.email);
      loginPages.fillPassword(users.loginUser.password);
      loginPages.submit();

      cy.url().should('include','/dashboard');
    });
    
    it('Login  email salah', () => {
      loginPages.fillEmail(`${random}@mail.com`);
      loginPages.fillPassword(users.loginUser.password);
      loginPages.submit();

      loginPages.getErrorMesage().should('be.visible');
    });
    
    it('Login password salah', () => {
      loginPages.fillEmail(users.loginUser.email);
      loginPages.fillPassword('12345');
      loginPages.submit();

      loginPages.getErrorMesage().should('be.visible');
    });

    it('Login format email salah', () => {
      loginPages.fillEmail(`${random}`);
      loginPages.fillPassword(users.loginUser.password);
      loginPages.submit();

      loginPages.getErrorMesage().should('be.visible');
    });

    it('Login email kosong', () => {
      loginPages.fillPassword(users.loginUser.password);
      loginPages.submit();

      loginPages.getErrorMesage().should('be.visible');
    });

    it('Login password kosong', () => {
      loginPages.fillEmail(users.loginUser.email);
      loginPages.submit();

      loginPages.getErrorMesage().should('be.visible');
    });

    it('Login field kosong', () => {
      loginPages.submit();

      loginPages.getErrorMesage().should('be.visible');
    });

  });
  