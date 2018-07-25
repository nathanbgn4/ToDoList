import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('should test todolist', () => {
  it('should check state of values', () => {
    const wrapper = shallow(<App />);
    const valueState = wrapper.state().value;
    const emptyState = wrapper.state().empty;
    const repeateState = wrapper.state().repeat;

    expect(valueState).toEqual('');
    expect(emptyState).toBeFalsy();
    expect(repeatState).toBeFalsy();

  });
});
