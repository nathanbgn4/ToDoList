import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow, mount, render, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

configure({ adapter: new Adapter() });

describe('should test todolist', () => {

  let wrapper, spy;
  const todos = ['do stuff', 
                'more stuff', 
                'less stuff'];

  beforeEach(() => {
    wrapper = shallow(<App />);
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
  
    it('should check the presence of elements', () => {
      expect(wrapper.find('#addButton')).toBeTruthy();
      expect(wrapper.find('#clearButton')).toBeTruthy();
      expect(wrapper.find('#deleteButton').exists()).toBeFalsy();
      expect(wrapper.find('input')).toBeTruthy();
      expect(wrapper.find('#emptyWarn').exists()).toBeFalsy();
      expect(wrapper.find('#repeatWarn').exists()).toBeFalsy()

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

    it('should check input box', () => {
      //wrapper.setState({value: todos[0]});
      wrapper = mount(<App />);
      wrapper.find('#listInput').instance().value = todos[0];
      wrapper.find('#listInput').simulate('change');

      expect(wrapper.state().value).toEqual(todos[0]);
    });

    it('should add items to the list', () => {
        wrapper = mount(<App />);
        spy(wrapper, 'addButton');

        todos.map((item) => {
          wrapper.find('#listInput').instance().value = item;
          wrapper.find('#listInput').simulate('change');
          expect(wrapper.state().empty).toBeFalsy();
          expect(wrapper.state().repeat).toBeFalsy();
          wrapper.find('#addButton').simulate('click', {preventDefault: () => {}});
        })
        
        expect(spy.called).toBeTruthy();
        expect(wrapper.find('#deleteButton').exists()).toBeTruthy();
        expect(wrapper.find('ul').children().length).toEqual(3);
    });

    it('should delete items from the list and clear it', () => {
      wrapper = mount(<App />);
      
      todos.map((item) => {
        wrapper.find('#listInput').instance().value = item;
        wrapper.find('#listInput').simulate('change');
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
      wrapper = mount(<App />);
      wrapper.find('#addButton').simulate('click', {preventDefault: () => {}});

      expect(wrapper.state().value).toEqual('');
      expect(wrapper.state().empty).toBeTruthy();
      expect(wrapper.find('#emptyWarn').exists()).toBeTruthy();

      wrapper.find('#listInput').instance().value = todos[0];
      wrapper.find('#listInput').simulate('change');
      wrapper.find('#addButton').simulate('click', {preventDefault: () => {}});

      wrapper.find('#listInput').instance().value = todos[0];
      wrapper.find('#listInput').simulate('change');
      wrapper.find('#addButton').simulate('click', {preventDefault: () => {}});

      expect(wrapper.find('#repeatWarn').exists()).toBeTruthy();
      expect(wrapper.state().repeat).toBeTruthy();

    });
  });
  
});
