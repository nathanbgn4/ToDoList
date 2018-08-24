import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer);

ReactDOM.render(
<Provider store={store} >
     <BrowserRouter>
          <App />
     </BrowserRouter>
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
