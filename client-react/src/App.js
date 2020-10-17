import React from "react";
import Home from "./components/home";
// import Task from "./components/Task";
import ViewTicket from "./components/ViewTicket";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/view">view</Link>
          </li>
        </ul>
        <h1> this is where our navbar will go that will host our links to the modules</h1>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/view" component={ViewTicket} />

      </div>
    </Router>
  );
}

export default App;
