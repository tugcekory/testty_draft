/// <reference types="Cypress" />

describe("Test TY Favorite scenarios", () => {
    it.only("Should be able to add products to favorites from search results", () => {
        cy.visit("https://www.trendyol.com/")
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('.user-login-container > .link > .link-text').click()  
        cy.get('[data-testid="email-input"]').click()
        cy.get('[data-testid="email-input"]').type("rich49@ovxfvpiooh.ga")  
        cy.get('[data-testid="password-input"]').type("Mahmut1!")
        cy.get('.q-primary').click()
        cy.title().should('include', 'Kadın Butikleri, Yeni Sezon Ürünleri - Trendyol')
        cy.get('.account-favorites > .link').click()
        function deletefavoriteproduct() {
            cy.get('body').then((body) => {
                if (body.find('.favored-product-container').length > 0) {
                    cy.get('.i-close').click()
                }
            })
        }
        deletefavoriteproduct()
        cy.get('[data-testid="suggestion"]').type("Gömlek")
        cy.get('[data-testid="search-icon"]').click()
        cy.get('[data-id="241256509"] > .fvrt-btn-wrppr > .fvrt-btn').should('not.have.class', 'fvrt-btn fvred').click({force: true})
        cy.get('[data-id="241256509"] > .fvrt-btn-wrppr > .fvrt-btn').should('have.class', 'fvrt-btn fvred')
        cy.get('.account-favorites > .link').click()
        cy.get('.basket-button').click()
        cy.get('.basket-preview > .link > .link-text').click({force: true})
        cy.get('.counter-content').should('have.value', '1')
        cy.get('.i-trash').click()
        cy.get('.pb-item-remove-confirmation-modal-footer > div > :nth-child(2)').click() 
        cy.get('.pb-empty-basket > :nth-child(1) > span').should('have.text', 'Sepetinde ürün bulunmamaktadır.')

    })

})

