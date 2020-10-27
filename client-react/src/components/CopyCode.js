import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
 
class CopyCode extends React.Component {
    state = {value: 'import React from "react";import Ticket from "./components/Ticket"; import Navbar from "./components/Navbar/Navbar";import ViewTicket from "./components/ViewTicket";import About from "./components/Pages/HomePage/About// get our fontawesome imports import { faHome } from "@fortawesome/free-solid-svg-icons";import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";import Cards from "./components/Cards/Card"; import CopyCode from "./components/CopyCode";import "./App.css";import { BrowserRouter as Router, Route} fromreact-router-domimport Footer from "./components/Footer";function App() { return (<Router> <div><Navbar /><Route exact path="/createticket" component={Ticket} /><Route path="/view" component={ViewTicket} /><Route path="/contact" component={Cards}  <Route path="/about" exact component={About} /><Route path="/copycode" exact component={CopyCode} /><Footer/></div </Router>);export default App;' , 
    copied:false};
  
    onChange = ({target: {value}}) => {
      this.setState({value, copied: false});
    };
    onClick = ({target: {innerHTML}}) => {
        console.log(`Clicked on "${innerHTML}"!`); // eslint-disable-line
      };
    
      onCopy = () => {
        this.setState({copied: true});
      };
 
    render() {
        return (
          <div className="app">
            <h1>react-copy-to-clipboard</h1>
    
            <section className="section">
              <textarea onChange={this.onChange} rows={2} cols={10} value={this.state.value} />
            </section>
    
            <section className="section">
              <h2>1. Button</h2>
              <CopyToClipboard onCopy={this.onCopy} text={this.state.value}>
                <button>Copy to clipboard with button</button>
              </CopyToClipboard>
            </section>
    
            <section className="section">
              <h2>3. with onClick</h2>
              <CopyToClipboard
                onCopy={this.onCopy}
                options={{message: 'Whoa!'}}
                text={this.state.value}>
                <button onClick={this.onClick}>Copy to clipboard with onClick prop</button>
              </CopyToClipboard>
            </section>
    
            <section className="section">
              {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
            </section>
    
            <section className="section">
              <textarea cols="22" rows="3" style={{marginTop: '1em'}} />
            </section>
          </div>
        );
      }
    }
    
 
export default CopyCode;