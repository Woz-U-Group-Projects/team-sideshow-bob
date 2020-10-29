import React from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Form.css';
import { motion } from 'framer-motion';

class Ticket extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tickets: [] };
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.email = React.createRef();
    this.category = React.createRef();
    this.content = React.createRef();
    this.urgency = React.createRef();
  }

    componentDidMount() {
      this.getData();
    }

    getData = () => {
      // Java Spring Boot uses port 8080
      let url = "http://localhost:8080/tickets";
      // axios.get(url).then(response => console.log(response.data));
      axios.get(url).then(response => this.setState({ tickets: response.data }));
    };

    addTicket = () => {
      let url = "http://localhost:8080/tickets";
      axios.post(url, { 
                  firstName: this.firstName.current.value,
                  lastName: this.lastName.current.value,
                  email: this.email.current.value,
                  category: this.category.current.value,
                  content: this.content.current.value,
                  urgency: this.urgency.current.value
  
      }).then(response => {
        // refresh the data
        this.getData();
        // empty the input
        this.firstName.current.value = "";
        this.lastName.current.value = "";
        this.email.current.value = "";
        this.content.current.value = "";
      });
    };

    render() {
        return (
          <div className="form-container">
         
                  
                  <motion.Form onSubmit={this.handleSubmit}
                  initial={{x:-350}}
                  animate={{x:0
                  }}
                  >
                  <h3>Please Create a Ticket</h3>
                      <label >First Name:</label>
                      <input  className="Input" type="text" name="firstName" ref={this.firstName} />
                      <br></br>
                      <label>Last Name:</label>
                      <input className="Input" type="text" name="lastName" ref={this.lastName}/>
                      <br></br>
                      <label>Email:</label>
                      <input className="Input" type="text" name="email" ref={this.email} />
                      <br></br>
                      <label className="dropdown" >
            
                          Select a Category:<br></br>
                          <select ref={this.category} >
                              <option value="hardware">Hardware</option>
                              <option value="software">Software</option>
                              <option value="internet">Internet</option>
                              <option value="other">Other</option>
                          </select>
                      </label>
                      <label className="dropdown">
                          Select a Category:<br></br>
                          <select ref={this.urgency} >
                              <option value="urgent">Urgent</option>
                              <option value="Normal">Normal</option>
                              <option value="Low">Low</option>
                          </select>
                      </label>
                      <br></br>
                      <label className="Issue">Please Describe Your Issue:</label>
                      <br></br>
                      <textarea ref={this.content} name="content" className="Issue"/>
                      <br></br>
                      <Button variant="secondary" type="button" className="submit" onClick={this.addTicket}>Submit Ticket</Button>
                      
              </motion.Form>
        </div>
        );
    }
}
export default Ticket;