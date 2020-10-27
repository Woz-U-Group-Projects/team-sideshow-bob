import React from "react";
import Ticket from "./components/Ticket";
import Navbar from "./components/Navbar/Navbar";
import ViewTicket from "./components/ViewTicket";
import About from "./components/Pages/HomePage/About"
// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cards from "./components/Cards/Card";
import CopyCode from "./components/CopyCode";
import "./App.css";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from "./components/Footer";



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        
        

        

        <Route exact path="/createticket" component={Ticket} />
        <Route path="/view" component={ViewTicket} />
        <Route path="/contact" component={Cards} />
        <Route path="/about" exact component={About} />
        <Route path="/copycode" exact component={CopyCode} />
        <Footer/>
        

      </div>
      
      
      
    </Router>
  );
}





export default App;