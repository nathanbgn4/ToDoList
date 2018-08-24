import React from 'react';
import ReactDOM from 'react-dom';
import ToDoMui from '../routes/ToDoMui.js';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

configure({ adapter: new Adapter() });

describe('should test todolist', () => {

  let   wrapper, spy;
  const todos = ['do stuff', 
                'more stuff', 
                'less stuff'];

  beforeEach(() => {
    wrapper = shallow(<ToDoMui />).dive();
    spy = sinon.spy();
  });

  describe('page rendering', () => {
    it('should render the page successfully', () => {
      expect(wrapper).toBeTruthy();
    });
  
    it('should check state of values', () => {
      expect(wrapper.state().value).toEqual('');
      expect(wrapper.state().empty).toBeFalsy();
      expect(wrapper.state().repeat).toBeFalsy();
    });
  });
  
  describe('element functionality', () => {
    it('should test the add button', () => {
      spy(wrapper, 'addButton');
      wrapper.find('#addButton').simulate('click', {preventDefault: () => {}});
      
      expect(spy.calledOnce).toBeTruthy();
    });
    
    it('should test the clear button', () => {      
      spy(wrapper, 'clearList');
      wrapper.find('#clearButton').simulate('click', {preventDefault: () => {}});
      
      expect(spy.calledOnce).toBeTruthy();
    });

    it('should add items to the list', () => {
        spy(wrapper, 'addButton');

        todos.map((item) => {
          wrapper.state().value = item;
          wrapper.find('#addButton').simulate('click', {preventDefault: () => {}});
        })
        
        expect(spy.called).toBeTruthy();
        expect(wrapper.find('#deleteButton').exists()).toBeTruthy();
        expect(wrapper.find('ul').children().length).toEqual(3);
    });

    it('should delete items from the list and clear it', () => {      
      todos.map((item) => {
        wrapper.state().value = item;
        wrapper.find('#addButton').simulate('click', {preventDefault: () => {}});
      })

      spy(wrapper, 'clearList');

      wrapper.find('ul').childAt(1).find('#deleteButton').simulate('click', {preventDefault: () => {}});
      expect(wrapper.find('ul').children().length).toEqual(2);
      expect(spy.called).toBeTruthy;

      spy(wrapper, 'deleteItem');

      wrapper.find('#clearButton').simulate('click', {preventDefault: () => {}});
      expect(wrapper.find('ul').children().length).toEqual(0);
      expect(spy.called).toBeTruthy();
    });

    it('should check for element errors', () => {
      wrapper.find('#addButton').simulate('click', {preventDefault: () => {}});

      expect(wrapper.state().value).toEqual('');
      expect(wrapper.state().empty).toBeTruthy();
      expect(wrapper.find('#emptyWarn').exists()).toBeTruthy();

      wrapper.state().value = todos[0];
      wrapper.find('#addButton').simulate('click', {preventDefault: () => {}});

      wrapper.state().value = todos[0];
      wrapper.find('#addButton').simulate('click', {preventDefault: () => {}});

      expect(wrapper.find('#repeatWarn').exists()).toBeTruthy();
      expect(wrapper.state().repeat).toBeTruthy();

    });
  });
  
});
