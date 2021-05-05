import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HomePage from './Home';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './store';
import { Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import history from './history';




ReactDOM.render(
  <Provider store={store}>

  <React.StrictMode>

   <Router history={history} >
   <Switch>
        <Route exact path='/'>
          <App />
          </Route>
        <Route exact path='/home' component={HomePage}/>
        {/* <Route path='/schedule' component={}/> */}
      </Switch>
   </Router>

  </React.StrictMode>

</Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
