import user from '../fixtures/user.json'
import url from '../fixtures/url.json'
import pageHome from '../support/page_objects/pageHome'
import pageFormulario from '../support/page_objects/pageFormulario'
import categoriaLibro from '../support/page_objects/categoriaLibro'
import pageBookDetails from '../support/page_objects/pageBookDetails'
import pageMywishlist from '../support/page_objects/pageMywishlist'



describe('Pruebas de front-end', () => {

  // it.only sirve para ejecutar solo este test
  // it.skip sirve para saltar este test

  it.only('Comprar carrito exitosamente y visualizar orden de compra', () => {

    // PRECONDICIONES invocar apis para dejar el carrito vacio
    cy.deleteCartApi(user.id)
    cy.deleteWishlist(user.id)




    // Acción paso 1

    cy.login(user.name, user.password)
    cy.url().should('include', url.baseUrl)
    pageHome.getBookList().contains('Harry Potter and the Chamber of Secrets')
    pageHome.amountCart(0)

    // Acción paso 2

    pageHome.addToCartButton().click()
    pageHome.checkToastAddedToCart()

    // Acción paso 3

    pageHome.amountCart(1)
    pageHome.shopping_cart()

    // Acción paso 4

    pageHome.CheckOut().click()

    // Acción paso 5

    pageFormulario.typeName()
    pageFormulario.typeAddress1()
    pageFormulario.typeAdress2()
    pageFormulario.typePincode()
    pageFormulario.typeState()

    // Acción paso 6

    pageHome.placeOrder().click()

    // Acción paso 7

    pageHome.viewOrden().click()

  })


  it('Verificar que la categoría Tech muestre el libro correcto', () => {

    cy.deleteCartApi(user.id)
    cy.deleteWishlist(user.id)


    // Accion paso 1 Ingresar a la web https://app.bookdbqa.online/login y iniciar sesión.

    cy.login(user.name, user.password)
    cy.url().should('include', url.baseUrl)

    // Accion paso 2 Verificar los elementos visibles en el home

    pageHome.heartCounter()
    pageHome.amountCart(0)
    pageHome.getBookList()

    // Accion paso 3 Verificar la sección All Categories

    categoriaLibro.typeGenero()

    // Accion paso 4 Hacer clic en la categoría Tech dentro de All Categories.

    categoriaLibro.typeTech().click()

    // Hacer clic en el libro de Steve Jobs
    
    categoriaLibro.typeDetalle().click()
    
    // Verificar el detalle del libro

    categoriaLibro.typeDetails()

  })


  it('Validar que se genere el resumen de un libro usando Google Gemini desde el detalle del libro', () => {
    
    cy.deleteCartApi(user.id)
    cy.deleteWishlist(user.id)

    //iniciar sesión

    cy.login(user.name, user.password)
    cy.url().should('include', url.baseUrl)
    
    //Verificar elementos visibles en el Home

    pageHome.heartCounter()
    pageHome.amountCart(0)

    //Click en la imagen del primer libro de la lista

    pageHome.getBookList().contains('Harry Potter and the Chamber of Secrets').click()

    pageBookDetails.buttonAddtoCar()
    pageBookDetails.buttonAddtoWishlist()
    
    //Click en el botón “Generate book plot summary using Google Gemini”

    pageBookDetails.typeGemini().click()
    pageBookDetails.generarResumen().click()
    
    //Verificar sinopsis generada

    pageBookDetails.verResumen().click()

  })

  it('Agregar libro a My Wishlist', () => {

    // Api para vaciar la lista de libros
    cy.deleteCartApi(user.id)
    cy.deleteWishlist(user.id)

    // Inicio de sesión

    cy.login(user.name, user.password)
    cy.url().should('include', url.baseUrl)
    
    // Verificar carrito y corazón en 0 o vació

    pageHome.heartCounter()
    pageHome.amountCart(0)

    // Ingreso al detalle del libro

    pageHome.getBookList().contains('Harry Potter and the Chamber of Secrets').click()
    pageBookDetails.detailBook()
    
    // Verifico los botones de Agregar al carrito Agregar a la lista de favoritos 

    pageBookDetails.buttonAddtoCar()
    pageBookDetails.buttonAddtoWishlist().click()
    

    // Verifico que cambien el boton a Remove y el contador del corazón

    pageBookDetails.buttonRemovefromWishlist()
    pageHome.heartCounter().should('contain', '1')
    
    // Verifico el carrito en 0

    pageHome.amountCart(0)

    // Abro la wishlist

    pageHome.wishlistButton()

    // Verifico que el libro esté en la whislist

    pageMywishlist.appWishlist()



  })



})

