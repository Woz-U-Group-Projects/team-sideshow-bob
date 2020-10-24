import React from "react";
import CreateTicket from "./components/CreateTicket";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import ViewTicket from "./components/ViewTicket";
import "./App.css";
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Route exact path="/" component={Home} />
        <Route path="/create" component={CreateTicket} />
        <Route path="/view" component={ViewTicket} />

      </div>
    </Router>
  );
}

export default App;
