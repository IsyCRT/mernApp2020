import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import HeaderApp from './components/HeaderApp';//para usar componentes
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './components/Home';
import { HashRouter, Route } from 'react-router-dom';// hay que agregarlo

ReactDOM.render(<HeaderApp />, document.getElementById('header'));
ReactDOM.render(<HashRouter>
      <div>
        <Route exact path="/" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/home" component={Home} />
      </div>
   </HashRouter >,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
