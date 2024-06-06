document.getElementById('my-button').addEventListener('click',function(){
    console.log('Hello world');
    document.querySelector('h1').textContent='Moi maailma';
});
document.getElementById('add-data').addEventListener('click', function() {
    let ul = document.getElementById('my-list');
    let li = document.createElement('li');
    let text = document.getElementById('list-text').value;
    li.textContent = text;
    ul.appendChild(li);
});
describe('Week 1', () =>{
    it('should find the ul element', () =>{
        cy.visit('index.html');
        cy.get('#my-list').should('exist');
    });
    it('should add an item to the list', () => {
        cy.get('#list-text').type('Test item');
        cy.get('#add-data').click();
        cy.get('#my-list').children().should('have.length',1);
        cy.get('#my-list').children().first().should('have.text','Text item');
    
    });
});