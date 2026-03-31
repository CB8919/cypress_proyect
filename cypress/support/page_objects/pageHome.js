class pageHome {

    getBookList() {
        return cy.get('.d-flex.justify-content-start.card-deck-container.mb-4')
    }

    amountCart(cantidad) {
        return cy.get('#mat-badge-content-0').contains(cantidad).should('be.visible')
    }

    addToCartButton() {
        return cy.get('button').contains('Add to Cart')
    } 
    
    checkToastAddedToCart() {
        cy.contains('One Item added to cart').should('be.visible')
    }

    shopping_cart() {
        return cy.get('button').contains('shopping_cart').click()
    }

    CheckOut() {
        return cy.get('button').contains(' CheckOut ').should('be.visible')
    }

    placeOrder() {
        return cy.get('button').contains('Place Order')
    }

    viewOrden() {
        return cy.get('table').contains('334-898844')
    }

    heartCounter() {
        return cy.get('#mat-badge-content-1')
    }

    wishlistButton() {
        return cy.get('button').contains('favorite').click()
    }





}module.exports = new pageHome();