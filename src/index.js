import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './App';
import Contacts from './contacts';
import Vladimir from './vlad';
import Katerina from './kater';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/contacts/" component={Contacts} />
      <Route path="/team/" component={Vladimir} />
      <Route path="/team1/" component={Katerina} />
      <Route  component={Main} />
    </Switch>
  </Router>
);

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
