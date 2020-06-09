import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import FeedPage from "./components/FeedPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <nav className="navbar">
            <Link className="navbar-item" to="/">
              Home Page
            </Link>
            <Link className="navbar-item" to="/ProfilePage">
              Profile
            </Link>
            <Link className="navbar-item" to="/Createproject">
              Create A Project
            </Link>
            <div className="SignUpAndLogIn">
              <Link className="navbar-item" to="/SignUp">
                Sign Up
              </Link>
              <Link className="navbar-item" to="/Login">
                Login
              </Link>
            </div>
          </nav>
          <Switch>
            <Route path="/SignUp">
              <h1> SignUp </h1>
            </Route>
            <Route path="/login">
              <h1> Login </h1>
            </Route>
            <Route path="/ProfilePage">
              <ProfilePage></ProfilePage>
            </Route>
            <Route path="/Createproject">
              <h1>create a project</h1>
            </Route>
            <Route path="/">
              <h1> Feed of Job Opportunities</h1>
              <FeedPage></FeedPage>
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
