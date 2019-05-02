import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import Main from './Containers/Main';
import Profile from './Containers/Profile';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/profile/:id' component={Profile} />
      </Switch>
    </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
