import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Layouts/Navbar';
import User from './Components/User/User';
import Alert from './Components/Layouts/Alert';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import Notfound from './Components/Pages/Notfound';

import GithubState from './Context/github/GithubState';
import AlertState from './Context/alert/AlertState';

import './App.css';

const App = () => {
    return (
      <GithubState>
        <AlertState>
      <Router>
      <div className="App">
        <Navbar />
        <div className="container">
        <Alert />
        <Switch>
          <Route 
          exact path='/'
          component = {Home} />
          <Route 
          exact path='/about' 
          component = {About} />
          <Route 
          exact path ='/user/:login' 
          component = {User} 
          />
          <Route 
          component={Notfound} />
        </Switch>
        
        </div>
      </div>
      </Router>
      </AlertState>
      </GithubState>
    );
  } 

export default App;
