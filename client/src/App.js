import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div className="navbar">
            <Link className="navbar-item" to="/">
              Home Page
            </Link>
            <Link className="navbar-item" to="/ProfilePage">
              Profile Page
            </Link>
            <div className="SignUpAndLogIn">
              <Link className="navbar-item" to="/SignUp">
                Sign Up
              </Link>
              <Link className="navbar-item" to="/Login">
                Login
              </Link>
            </div>
          </div>
          <Switch>
            <Route path="/register">
              <h1> Register </h1>
            </Route>
            <Route path="/login">
              <h1> Login </h1>
            </Route>
            <Route path="/ProfilePage">
              <h1> Profile Page </h1>
            </Route>
            <Route path="/">
              <h1> Feed of Job Opportunities</h1>
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
