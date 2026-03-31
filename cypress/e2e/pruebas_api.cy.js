

describe('Pruebas de API', () => {

    it('API | Error al comprar carrito sin token', () =>{
        cy.checkOutAPI().then((response) => {
            expect(response.status).to.eq(401)
        })
    
    })

    it('API | Inicio de sesión exitoso con usuario y contraseña válidos', () => {
        cy.loginAPI()
    })
    it('API | Error al buscar libro por ID inexistente', () => {
        cy.errorIDlibro('1234')
    })

    it('API | Listar libros desde la API', () => {
        cy.listBookAPI()

    })

})

