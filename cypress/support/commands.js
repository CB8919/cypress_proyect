const pageLogin = require('../support/page_objects/pageLogin');


// Comando Login front
Cypress.Commands.add('login', (name, password) => {
    cy.visit('https://app.bookdbqa.online/login')
    pageLogin.typeUsername(name)
    pageLogin.typePassword(password)
    pageLogin.loginButton().click()

})



// Comando de API delete carrito
Cypress.Commands.add('deleteCartApi', (userId) => {
    cy.request({
        method: 'DELETE',
        url: `https://app.bookdbqa.online/api/shoppingcart/${userId}`,
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGVtbyIsInN1YiI6IlVzZXIiLCJqdGkiOiI3ZGIzYTIwMC1jNGM4LTRlMDItODg4YS1iOTY2ZTEzODkzM2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJVc2VyIiwidXNlcklkIjoiMzAzMCIsImV4cCI6MTc3NTA2OTU5NSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzNjQvIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzNjQvIn0.iJxreXW3IUKZqe-OjFxheOdpJHoLdZ62kbjS77EKYzc' // Token vacio
        },

    }).then((response) => {
        expect(response.status).to.eq(200)
    })
})


// Comando para compra de carrito sin token
Cypress.Commands.add('checkOutAPI', () => {
    cy.request({
        method: 'POST',
        url: 'https://app.bookdbqa.online/api/CheckOut/1005',
        failOnStatusCode: false, // Para que no falle el test si el status code es 4xx o 5xx
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            authorization: '' // Token vacio
        },
        body: {
            "orderDetails": [
                {
                    "book": {
                        "bookId": 2,
                        "title": "Harry Potter and the Chamber of Secrets",
                        "author": "JKR",
                        "category": "Mystery",
                        "price": 236,
                        "coverFileName": "9d8f4978-0ef8-42d0-873a-4eb583439237HP2.jpg"
                    },
                    "quantity": 1
                }
            ],
            "cartTotal": 2483
        }

    })

})


// Comando Login API
Cypress.Commands.add('loginAPI', () => {
  cy.fixture('user.json').then((userData) => {   
    cy.request({
      method: 'POST',
      url: 'https://app.bookdbqa.online/api/login',
      failOnStatusCode: false,
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        username: userData.name,      
        password: userData.password
      }
    }).then((response) => {
      if (response.status === 200) {
        cy.log("Login exitoso")
      } else {
        cy.log("Error en el login. Código: " + response.status)
      }
      expect(response.status).to.eq(200)
    })
  })
})


// Comando para buscar libro por ID inexistente
Cypress.Commands.add('errorIDlibro', (idlibro) => {


    cy.request({
        method: 'GET',
        url: `https://app.bookdbqa.online/api/book/${idlibro}`,
        failOnStatusCode: false,

    }).then((response) => {
        cy.log(`Se realizo la solicitud para el libro ID: ${idlibro}`)
        expect(response.status).to.eq(404)
        cy.log(`Código de estado: ${response.status}. No exite el libro con el ID: ${idlibro} `)

    })


})


// Comando para vaciar favoritos
Cypress.Commands.add('deleteWishlist', (userId) => {
    cy.request({
        method: 'DELETE',
        url: `https://app.bookdbqa.online/api/Wishlist/${userId}`,
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGVtbyIsInN1YiI6IlVzZXIiLCJqdGkiOiI3ZGIzYTIwMC1jNGM4LTRlMDItODg4YS1iOTY2ZTEzODkzM2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJVc2VyIiwidXNlcklkIjoiMzAzMCIsImV4cCI6MTc3NTA2OTU5NSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzNjQvIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzNjQvIn0.iJxreXW3IUKZqe-OjFxheOdpJHoLdZ62kbjS77EKYzc'
        },

    }).then((response) => {
        expect(response.status).to.eq(200)
    })
})


// Comando para ver la lista de libros
Cypress.Commands.add('listBookAPI', () => {
    cy.request({
        method: 'GET',
        url: 'https://app.bookdbqa.online/api/book',
        headers:{
            'content-type': 'application/json',
        }

    }).then((response) => {
        expect(response.status).to.eq(200)
        
        const libros = response.body // Guardo el objeto de array en la variable
        cy.log('LISTA DE LIBROS')

        libros.forEach((libro) => { // Recorro la lista en imprimo el titulo del libro
            cy.log(`${libro.title}`)
            
        });
        
    })

})