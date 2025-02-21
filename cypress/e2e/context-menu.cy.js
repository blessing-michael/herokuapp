/// <reference types = "cypress" />

describe('context menu test', ()=>{
    beforeEach( ()=>{
        cy.visit('https://the-internet.herokuapp.com/context_menu')
    })
    it('should trigger a pop up menu on right click', ()=>{
        // Right-click on the box
        cy.get('#hot-spot').rightclick()
    })

      // Verify that the alert pops up
      it('should verify alert pops up', ()=>{
        cy.on('window:alert', (alertText)=>{
            expect(alertText).to.eq('You selected a context menu');

        })
      })
})