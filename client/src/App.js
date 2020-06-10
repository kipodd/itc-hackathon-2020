import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import FeedPage from "./components/FeedPage";
import React, { useState } from "react";
import AddNewProject from "./components/addProjectForm";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import SeacrhBar from "./components/SearchField";

function App(props) {
  return (
    <div className="App container">
      <Router>
        <nav className="navbar">
          <NavLink className="navbar-item" to="/">
            Home
          </NavLink>
          {/* <NavLink className="navbar-item" to="/ProfilePage">
            Profile
          </NavLink> */}
          <NavLink className="navbar-item" to="/add_project">
            Add New Project
          </NavLink>
          <div className="SignUpAndLogIn">
            <NavLink className="navbar-item" to="/Profile">
              Greta Feldman
            </NavLink>
            <NavLink className="navbar-item" to="/Logout">
              Log Out
            </NavLink>
          </div>
        </nav>
        <Switch>
          <Route path="/Profile">
            <ProfilePage></ProfilePage>>
          </Route>
          <Route path="/add_project">
            <AddNewProject></AddNewProject>
          </Route>
          <Route path="/Logout">
            <br></br>
            <h1>
              We are upset that you are leaving us! Looking forward to seeing
              you again
            </h1>
          </Route>
          {/* <Route path="/login">
            <Login></Login>
          </Route> */}
          {/* <Route path="/ProfilePage">
            <ProfilePage></ProfilePage>
          </Route> */}
          <Route path="/Createproject">
            <h1>create a project</h1>
          </Route>
          <Route path="/">
            <SeacrhBar />
            <FeedPage></FeedPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
