class categoriaLibro {

    


    typeGenero() {

        const categoria = ['All Categories', 'Biography', 'Fiction', 'Mystery', 'Fantasy', 'Romance', 'Drama', 'Tech']

        categoria.forEach((nombre) => {
            cy.get('.mdc-list-item__content')
              .contains(nombre).should('be.visible')
        })
    }

    typeTech() {
        return cy.get('.mdc-list-item__content').contains('Tech')
    }

    typeDetalle() {
        return cy.get('.mat-mdc-card.mdc-card.book-card.mat-elevation-z2').contains('Steve Jobs').should('be.visible')
    }

    typeDetails() {
        return cy.get('td').contains('Tech').should('be.visible')
    }





    
}module.exports = new categoriaLibro()


