
class pageLogin {

    typeUsername(name) {

        cy.get('input[formcontrolname="username"]').should('be.visible').type(name);
        //cy.get('input[formcontrolname="username"]').type(user.name)

    }

    

    typePassword(password) {

        cy.get('input[formcontrolname="password"]').should('be.visible').type(password);
        //cy.get('input[formcontrolname="password"]').type(user.password);

    }

    loginButton() {

        return cy.get('app-login button').contains('Login');
        //cy.get('app-login button').contains('Login').click();
    }
}
module.exports = new pageLogin();