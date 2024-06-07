describe('Week 1 Task 4', () => {
    beforeEach(() => {
        cy.visit('index.html');
    });

    it('should find the ul element', () => {
        cy.get('#my-list').should('exist');
    });

    it('should add an item to the list with custom text', () => {
        const text = 'Test item';
        cy.get('#list-text').type(text);
        cy.get('#add-data').click();
        cy.get('#my-list').children().should('have.length', 1);
        cy.get('#my-list').children().first().should('have.text', text);
    });
});
