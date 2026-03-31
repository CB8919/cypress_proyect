class pageBookDetails {

    typeGemini() {
        return cy.get('button.mat-mdc-button-base.btn-gemini span.mdc-button__label').contains('Generate book plot summary using Google Gemini')
    }

    generarResumen() {
        return cy.get('button.mat-mdc-button-base.btn-gemini span.mdc-button__label')
    }

    verResumen() {
        return cy.get('p.mt-4', { timeout: 15000 })
    }

    detailBook() {
        return cy.get('app-book-details').contains('Book Details')
    }

    buttonAddtoCar(){
        return cy.get('button').contains('Add to Cart').should('be.visible')
    }
    
    buttonAddtoWishlist(){
        return cy.get('button').contains(' Add to Wishlist')
    }

    buttonRemovefromWishlist(){
        return cy.get('button').contains(' Remove from Wishlist').should('be.visible')
    }
    

}module.exports = new pageBookDetails()