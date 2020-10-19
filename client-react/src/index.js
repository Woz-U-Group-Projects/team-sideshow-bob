import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './screens/Home'
import Ticket from './screens/Ticket';
import About from './screens/About';
import LiveChat from './screens/LiveChat';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Navbar from './screens/Navbar';

const App = () => 
(
  <Router>
    <div>
    

    <hr></hr>

      <Route exact path="/" component={Navbar} />
      <Route path="/about" component={About} />
      <Route path="/liveChat" component={LiveChat} />
      <Route path="/tickets" component={Ticket} />
    </div>
  </Router>
);




ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
