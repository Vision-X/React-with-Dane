import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Characters from './Characters';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Fragment>
      <Route exact path="/" component={ App }/>
      <Route path="/characters" component={ Characters } />
    </Fragment>
  </Router>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
