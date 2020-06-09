import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ProfilePage from './components/ProfilePage';
import './App.css';
import AddNewProject from './components/addProjectForm';

function App(props) {
  return (
    <div className='App'>
      <header className='App-header'>
        <Router>
          <div className='navbar'>
            <Link className='navbar-item' to='/'>
              Home Page
            </Link>
            <Link className='navbar-item' to='/ProfilePage'>
              Profile Page
            </Link>
            <div className='SignUpAndLogIn'>
              <Link className='navbar-item' to='/SignUp'>
                Sign Up
              </Link>
              <Link className='navbar-item' to='/Login'>
                Login
              </Link>
              <Link className='navbar-item' to='/add_project'>
                add new project
              </Link>
            </div>
          </div>
          <Switch>
            <Route path='/register'>
              <h1> Register </h1>
            </Route>
            <Route path='/add_project'>
              <AddNewProject></AddNewProject>
            </Route>
            <Route path='/login'>
              <h1> Login </h1>
            </Route>
            <Route path='/ProfilePage'>
              <ProfilePage></ProfilePage>
            </Route>
            <Route path='/'>
              <h1> Feed of Job Opportunities</h1>
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
