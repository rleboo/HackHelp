import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import {BrowserRouter} from 'react-router-dom'

// Noah is awesome

import Firebase, { FirebaseContext } from './components/Firebase';
ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);
