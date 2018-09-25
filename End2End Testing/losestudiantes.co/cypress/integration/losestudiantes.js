describe('Los estudiantes login', function() {
    it('Visits los estudiantes and fails at login', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      //Lineas nuevas  
      cy.contains('Ingresar').click()
      cy.get('.cajaLogIn').find('input[name="correo"]').click().type("wrongemail@example.com")
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("1234")
      cy.get('.cajaLogIn').contains('Ingresar').click()
      cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')
    })
})

describe('Crear cuenta', function() {
    it('Crear cuenta', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      //Crear una nueva cuenta
      cy.contains('Ingresar').click()
      cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Julián")
      cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Picón")
      cy.get('.cajaSignUp').find('input[name="correo"]').click().type("pruebas-miso33@hotmail.com")
      cy.get('.cajaSignUp').find('input[type="checkbox"]').first().check() //Estudio maestria
      cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('16')
      cy.get('.cajaSignUp').find('input[name="password"]').click().type("12345678")
      cy.get('.cajaSignUp').find('input[name="acepta"]').check()
      cy.get('.cajaSignUp').contains('Registrarse').click()
      cy.contains('Registro exitoso!')
    })
})

describe('Login', function() {
    it('Login', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      //Login
      cy.contains('Ingresar').click()
      cy.get('.cajaLogIn').find('input[name="correo"]').click().type("julian.picon@hotmail.com")
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("12345678")
      cy.get('.cajaLogIn').contains('Ingresar').click()
      cy.get('.navbar').contains('Salir')
    })
})

describe('Login cuenta existente', function() {
    it('Login cuenta existente', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      //Crear cuenta con usuario existente
      cy.contains('Ingresar').click()
      cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Julián")
      cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Picón")
      cy.get('.cajaSignUp').find('input[name="correo"]').click().type("julian.picon@hotmail.com")
      cy.get('.cajaSignUp').find('input[type="checkbox"]').first().check()
      cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('16')
      cy.get('.cajaSignUp').find('input[name="password"]').click().type("12345678")
      cy.get('.cajaSignUp').find('input[name="acepta"]').check()
      cy.get('.cajaSignUp').contains('Registrarse').click()
      cy.contains('Error: Ya existe un usuario registrado con el correo')
    })
})

describe('Búsqueda de profesores', function() {
    it('Búsqueda de profesores', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      //Búsqueda de profesores
      cy.get('.buscador').find('input[role="combobox"]').type("Dario Correal", {force:true})
      cy.contains('Dario Correal - Ingeniería de Sistemas')
    })
})

describe('Ir a la página del profesor', function() {
    it('Ir a la página del profesor', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      //Búsqueda de profesores
      cy.get('.buscador').find('input[role="combobox"]').type("Dario Correal", {force:true})
      cy.wait(4000)
      cy.get('.buscador').find('input[role="combobox"]').type('{enter}', {force: true})
      cy.wait(2000)
      cy.contains('Califica a este profesor')
    })
})

describe('Filtros por materia en la página del profesor', function() {
    it('Filtros por materia en la página del profesor', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      //Búsqueda de profesores
      cy.get('.buscador').find('input[role="combobox"]').type("Dario Correal", {force:true})
      cy.wait(4000)
      cy.get('.buscador').find('input[role="combobox"]').type('{enter}', {force: true})
      cy.get('input[name="id:ISIS1206"]').check()
      cy.contains('Estructuras De Datos')
    })
})