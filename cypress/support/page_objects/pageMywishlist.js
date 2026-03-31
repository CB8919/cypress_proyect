class pageMywishlist {

    appWishlist() {
        return cy.get('app-wishlist').contains('Harry Potter and the Chamber of Secrets')
    }

}module.exports = new pageMywishlist