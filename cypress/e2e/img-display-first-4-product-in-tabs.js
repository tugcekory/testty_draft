/// <reference types="Cypress" />

describe("First 4 product image in tabs display test", () => {
    it("Should be able to display first 4 products when navigated from tabs", () => {
        cy.visit("https://www.trendyol.com/")
        cy.get('#onetrust-accept-btn-handler').click()
        cy.title().should('include', 'En Trend Ürünler Türkiye')
        cy.get(':nth-child(1) > .category-header').contains('Kadın').trigger('mouseover')
        cy.get('#sub-nav-1 > .sub-nav-center > .sub-nav-outer > :nth-child(1) > .category-box > .sub-category-header').should('be.visible')
        cy.get('#sub-nav-1 > .sub-nav-center > .sub-nav-outer > :nth-child(1) > .category-box > .sub-item-list > :nth-child(1) > a')
          .contains('Elbise').click()
        cy.title().should('include', 'Yeni Sezon Elbise')
        it("Should be able to verify url parameters")
        cy.get(".prdct-cntnr-wrppr .p-card-img").filter(":lt(4)").each(($el, index, $list) => {
            cy.wrap($el).should('have.attr', 'src').should('include', 'https://cdn.dsmcdn.com' )
            cy.wrap($el).should('be.visible')
        })
    })
})