/// <reference types="Cypress" />

describe("Test TY Login scenarios", () => {
    it("Should be able to login successfully to TY", () => {
        cy.visit("https://www.trendyol.com/")
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('.user-login-container > .link > .link-text').click()    
        cy.get('[data-testid="email-input"]').click()
        cy.get('[data-testid="email-input"]').type("rich49@ovxfvpiooh.ga")  
        cy.get('[data-testid="password-input"]').type("Mahmut1!")
        cy.get('.q-primary').click()
        cy.title().should('include', 'Kadın Butikleri, Yeni Sezon Ürünleri - Trendyol')
    })

    it("Should not be able to login successfully to TY when user email is invalid", () => {
        cy.visit("https://www.trendyol.com/")
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('.user-login-container > .link > .link-text').click()  
        cy.get('[data-testid="email-input"]').click()
        cy.get('[data-testid="email-input"]').type("rich49")  
        cy.get('[data-testid="password-input"]').type("Mahmut1!")
        cy.get('.q-primary').click()
        cy.get('#error-box-wrapper').should('have.text', 'Lütfen geçerli bir e-posta adresi giriniz.')
    })

    it("Should not be able to login successfully to TY when user pw is invalid", () => {
        cy.visit("https://www.trendyol.com/")
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('.user-login-container > .link > .link-text').click()  
        cy.get('[data-testid="email-input"]').click()
        cy.get('[data-testid="email-input"]').type("rich49@ovxfvpiooh.ga")  
        cy.get('[data-testid="password-input"]').type("Mahmut1")
        cy.get('.q-primary').click()
        cy.get('#error-box-wrapper').should('have.text', 'E-posta adresiniz ve/veya şifreniz hatalı.')
    })

    it("Should not be able to login successfully to TY when user pw is missing", () => {
        cy.visit("https://www.trendyol.com/")
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('.user-login-container > .link > .link-text').click()  
        cy.get('[data-testid="email-input"]').click()
        cy.get('[data-testid="email-input"]').type("rich49@ovxfvpiooh.ga")  
        cy.get('.q-primary').click()
        cy.get('#error-box-wrapper').should('have.text', 'Lütfen şifrenizi giriniz.')
    })
})
