/// <reference types="Cypress" />

describe("Test TY Login scenarios", () => {
    it("Should not be able to login successfully to TY when user pw is invalid", () => {
        cy.visit("https://www.trendyol.com/")
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('.user-login-container > .link > .link-text').click()  
        cy.get('[data-testid="email-input"]').click()
        cy.get('[data-testid="email-input"]').type("rich49@ovxfvpiooh.ga")  
        cy.get('[data-testid="password-input"]').type("Mahmut1!")
        cy.get('.q-primary').click()
        cy.title().should('include', 'Kadın Butikleri, Yeni Sezon Ürünleri - Trendyol')
        cy.get('[data-testid="suggestion"]').type("Oyuncu Bilgisayarı")
        cy.get('[data-testid="search-icon"]').click()
        cy.get('[style="height: 22px; left: 0px; position: absolute; top: 0px; width: 100%;"] > .fltr-item-wrppr > .chckbox').as('Monster')
        cy.get('@Monster').parent().click()
        cy.get('.min').type("3000")
        cy.get('.max').type("10000")
        cy.get('.fltr-srch-prc-rng-srch').click()
        // cy.get('[data-id="59141281"] > .p-card-chldrn-cntnr > a > .image-container > .image-overlay > .image-overlay-body').invoke('removeAttr', 'target').click({force:true})
        const newUrl = "/monster/aryond-a32-v1-1-32-165hz-1ms-hdmi-display-g-sync-qhd-led-monitor-p-59141281?boutiqueId=614790&merchantId=968"
        cy.window().then(win => {
          cy.stub(win, 'open').as('windowOpen')
        });
        cy.get('[data-id="59141281"] > .p-card-chldrn-cntnr > a > .image-container > .image-overlay > .image-overlay-body').invoke('removeAttr', 'target').click({force: true});
        cy.get('@windowOpen').should('be.calledWith', newUrl)
        cy.window().then(win => {
          win.location.href = newUrl
        });
        cy.get('h1').should('contain', 'Monster')
        cy.get('.add-to-basket').click()
        cy.get('.product-preview-status-text').should('include.text', 'Ürün Sepete Eklendi')
    })

})
