describe('ToDoList tests', function() {

     let testList = ['test1', 'test2', 'test3', 'test4'];

     beforeEach(function(){
          cy.visit('http://localhost:3000');
     })

     it('should render the page', function(){
          cy.contains('To-Do List');
          cy.contains('Add Item');
          cy.contains('Clear List');
          cy.get('input').should('be.empty');
          cy.get('#emptyWarn').should('not.exist');
          cy.get('#repeatWar').should('not.exist');
     });

     it('Should check list input', function(){
          cy.get('input').type('TestItem');
          cy.get('input').should('have.value', 'TestItem');
     });

     it('should add item to the list', function(){
          cy.get('input').type(testList[0]);
          cy.get('#addButton').click();
     })

     it('should add multiple list items', function(){
          testList.map((item) => {
               cy.get('input').type(item);
               cy.get('#addButton').click();
          })
     });

     it('should clear the list', function(){
          testList.map((item) => {
               cy.get('input').type(item);
               cy.get('#addButton').click();
          })

          cy.get('#clearButton').click();
          cy.get('ul>li').should('have.length', 0)
     });

     it('should trigger both warnings', function(){
          cy.get('#addButton').click();
          cy.contains("Please enter at least one character");
          
          cy.get('input').type('TestItem');
          cy.get('#addButton').click();
          cy.get('input').type('TestItem');
          cy.get('#addButton').click();
          
          cy.contains('This item already exists');
     });

     it('should delete an item', function(){
          testList.map((item) => {
               cy.get('input').type(item);
               cy.get('#addButton').click();
          })

          cy.get('ul>li').should('have.length', 4);
          cy.get('ul>li:first').contains('Delete').click();
          cy.get('ul>li').should('have.length', 3);

     });
});