import React from "react";
import Home from "./components/Home";
import Ticket from "./components/Ticket";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ViewTicket from "./components/ViewTicket";
import Card from "./components/Card";
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from "./components/About";


// library.add(fab)

function App() {
  return (
    <div>
    <Router>

        <Navbar />


        <Route exact path="/" component={Home} />
        <Route path="/Ticket" component={Ticket} />
        <Route path="/view" component={ViewTicket} />
        <Route path="/Card"><Card /></Route>
        <Route path="/about" exact component={About} ></Route>
      

    </Router>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Footer />
    </div>

  );
}

export default App;
