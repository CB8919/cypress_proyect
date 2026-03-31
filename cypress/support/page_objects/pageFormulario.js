class pageFormulario {

    typeName() {
        return cy.get('input[formcontrolname="name" ]').type('Christian')
    }
    typeAddress1() {
        return cy.get('input[formcontrolname="addressLine1" ]').type('Suarez Fraga 123')
    }
    typeAdress2() {
        return cy.get('input[formcontrolname="addressLine2" ]').type('Apto 1B')
    }
    typePincode() {
        return cy.get('input[formcontrolname="pincode" ]').type('123456')
    }
    typeState() {
        return cy.get('input[formcontrolname="state" ]').type('CABA')
    }


}module.exports = new pageFormulario();


