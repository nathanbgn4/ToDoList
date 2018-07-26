To run jest tests

1. install sinon, enzyme, and enzyme-react-adapter-16 with npm install sinon and npm install --save-dev enzyme enzyme-react-adapter-16
2. add the following to the top of your test file.
      ```
          import React from 'react';
          import ReactDOM from 'react-dom';
          import App from './App';
          import {shallow, mount, render, configure} from 'enzyme';
          import Adapter from 'enzyme-adapter-react-16';
          import sinon from 'sinon';

          configure({ adapter: new Adapter() });
     ```
