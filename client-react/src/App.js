import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import ViewTicket from "./components/ViewTicket";


import Cards from "./components/Cards/Card"

import "./App.css";
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        

        <Route exact path="/" component={Home} />
        <Route path="/view" component={ViewTicket} />
        <Route path="/contact" component={Cards} />
        

      </div>
    </Router>
  );
}





export default App;