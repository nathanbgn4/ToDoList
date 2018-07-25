describe('ToDoList tests', function() {

     beforeEach(function(){
          cy.visit('http://localhost:3000');
          cy.fixture("testList").as('testList');
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
          cy.get('input').type(this.testList.testList[0]);
          cy.get('#addButton').click();
     })

     it('should add multiple list items', function(){
          this.testList.testList.map((item) => {
               cy.get('input').type(item);
               cy.get('#addButton').click();
          })
     });

     it('should clear the list', function(){
          this.testList.testList.map((item) => {
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
          this.testList.testList.map((item) => {
               cy.get('input').type(item);
               cy.get('#addButton').click();
          })

          cy.get('ul>li').should('have.length', 4);
          cy.get('ul>li:first').contains('Delete').click();
          cy.get('ul>li').should('have.length', 3);

     });
});