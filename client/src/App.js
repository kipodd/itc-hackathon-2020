import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import ProfilePage from './components/ProfilePage';
import FeedPage from './components/FeedPage';
import React, { useState } from 'react';
import AddNewProject from './components/addProjectForm';
import SignUp from './components/SignUp';
import Login from './components/Login';
import SeacrhBar from './components/SearchField';

function App(props) {
  return (
    <div className='App container'>
      <Router>
        <nav className='navbar'>
          <NavLink className='navbar-item' to='/'>
            Home Page
          </NavLink>
          <NavLink className='navbar-item' to='/ProfilePage'>
            Profile
          </NavLink>
          <NavLink className='navbar-item' to='/add_project'>
            Add New Project
          </NavLink>
          <div className='SignUpAndLogIn'>
            <NavLink className='navbar-item' to='/SignUp'>
              Sign Up
            </NavLink>
            <NavLink className='navbar-item' to='/Login'>
              Login
            </NavLink>
          </div>
        </nav>
        <Switch>
          <Route path='/SignUp'>
            <SignUp></SignUp>
          </Route>
          <Route path='/add_project'>
            <AddNewProject></AddNewProject>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/ProfilePage'>
            <ProfilePage></ProfilePage>
          </Route>
          <Route path='/Createproject'>
            <h1>create a project</h1>
          </Route>
          <Route path='/'>
            <SeacrhBar></SeacrhBar>
            <FeedPage></FeedPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
