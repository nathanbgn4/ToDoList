import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configure} from 'enzyme';
import { createMount, createShallow } from '@material-ui/core/test-utils';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

configure({ adapter: new Adapter() });

describe('should test todolist', () => {

  let shallow, shallowWrapper, wrapper, spy;
  const todos = ['do stuff', 
                'more stuff', 
                'less stuff'];

  beforeEach(() => {
    shallow = createShallow();
    shallowWrapper = shallow(<App />).shallow();
    spy = sinon.spy();
  });

  describe('page rendering', () => {
    it('should render the page successfully', () => {
      expect(shallowWrapper).toBeTruthy();
    });
  
    it('should check state of values', () => {
      expect(shallowWrapper.state().value).toEqual('');
      expect(shallowWrapper.state().empty).toBeFalsy();
      expect(shallowWrapper.state().repeat).toBeFalsy();
    });
  });
  
  describe('element functionality', () => {
    it('should test the add button', () => {
      spy(shallowWrapper, 'addButton');
      shallowWrapper.find('#addButton').simulate('click', {preventDefault: () => {}});
      
      expect(spy.calledOnce).toBeTruthy();
    });
    
    it('should test the clear button', () => {      
      spy(shallowWrapper, 'clearList');
      shallowWrapper.find('#clearButton').simulate('click', {preventDefault: () => {}});
      
      expect(spy.calledOnce).toBeTruthy();
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
