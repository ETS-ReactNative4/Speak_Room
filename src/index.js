import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route  component={Main} />
    </Switch>
  </Router>
);

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
