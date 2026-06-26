# QA Automation - Cypress

##  Descripción

Proyecto de automatización de pruebas end-to-end y validación de APIs sobre una aplicación web.

## Objetivo

Validar el correcto funcionamiento de flujos críticos de usuario y consistencia entre frontend y backend.

## Tecnologías
- Cypress
- JavaScript
- Postman (API Testing)
- REST APIs
- Page Object Model (POM)

## Estructura del proyecto
cypress/
├── e2e/                        # Tests E2E y API
├── fixtures/                   # Datos de prueba
└── support/
    └── page_objects/           # Page Object Model (POM)

## Alcance de pruebas
- Login de usuario
- Navegación
- Validación de productos
- Requests a API

## Tipos de testing
- E2E testing
- API testing
- Validación de status codes
- Escenarios positivos y negativos

## Instalación y ejecución

# Clonar el repositorio
git clone https://github.com/CB8919/cypress_proyect.git

# Instalar dependencias
npm install

# Ejecutar en modo visual
npx cypress open

# Ejecutar en modo headless
npx cypress run

## Ejemplos de pruebas
**Frontend (E2E)**

Caso 1: Compra de carrito exitosa

Usuario agrega productos al carrito
Finaliza la compra
Se valida generación de orden y visualización del resumen

Caso 2: Validación de categoría “Tech”

Usuario navega a la categoría Tech
Se verifica que se muestre el libro esperado
Se valida consistencia de la información mostrada

Caso 3: Generación de resumen con IA (Google Gemini)

Usuario accede al detalle de un libro
Solicita generación de resumen
Se valida que el contenido sea generado y mostrado correctamente

Caso 4: Agregar libro a “My Wishlist”

Usuario selecciona un libro
Lo agrega a la lista de deseos
Se valida persistencia y visualización en la wishlist

**API Testing**

Caso 1: Error al comprar sin token

Se realiza request de compra sin autenticación
Se valida respuesta de error (401 o 403)

Caso 2: Login exitoso

Se envían credenciales válidas
Se valida respuesta 200 y recepción de token

Caso 3: Búsqueda por ID inexistente

Se consulta un libro con ID inválido
Se valida respuesta de error (404)

Caso 4: Listado de libros

Se realiza request GET de libros
Se valida status 200
Se verifica estructura y contenido de la respuesta



