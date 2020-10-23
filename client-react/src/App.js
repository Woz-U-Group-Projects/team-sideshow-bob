import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ViewTicket from "./components/ViewTicket";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';

// library.add(fab)

function App() {
  return (

    <Router>
      <div>
        <Navbar />
        <Footer />

        <Route exact path="/"><Home/></Route>
        <Route path="/view"><ViewTicket /></Route>

      </div>
    </Router>

  );
}

export default App;
