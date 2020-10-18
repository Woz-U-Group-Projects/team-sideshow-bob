
import React from "react";
import  Ticket from "./components/Home";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Ticket />

    </div>
  );
}

export default App;