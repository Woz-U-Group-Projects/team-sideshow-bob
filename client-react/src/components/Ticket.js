import React from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './Stylesheets/Ticket.css'
class Ticket extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        tickets: [], 
        urgency: ""
        };
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
        let url = "http://localhost:8080/tickets";
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
            urgency: this.state.urgency

        }).then(response => {
            this.getData();
            this.firstName.current.value = "";
            this.lastName.current.value = "";
            this.email.current.value = "";
            this.content.current.value = "";
        });
    };


    render() {
        return (
            <div>
                <div className="ticketForm">
                <br></br>
        
                <form  onSubmit={this.handleSubmit}>
                    <Form.Group className="Input">
                        <Form.Control type="text" name="firstName" placeholder="First Name" ref={this.firstName} />
                    </Form.Group>
                    <Form.Group className="Input">
                        <Form.Control type="text" name="lastName" placeholder="Last Name" ref={this.lastName} />
                    </Form.Group>
                    <Form.Group className="Input">
                        <Form.Control type="text" name="email" placeholder="Email" ref={this.email} />
                    </Form.Group>
                    <br></br>

                    <Form.Group className="dropdown">
                        <Form.Label>Select a Category:</Form.Label>
                        <Form.Control as="select" ref={this.category}>
                            <option value="hardware">Hardware</option>
                            <option value="software">Software</option>
                            <option value="internet">Internet</option>
                            <option value="other">Other</option>
                        </Form.Control>
                    </Form.Group>
                    <br></br>

                    <Form.Group className="Issue">
                        <Form.Label>Please Describe Your Issue:</Form.Label>
                        <Form.Control as="textarea" rows="7" ref={this.content} />
                    </Form.Group>

                    <fieldset>
                        <Form.Group as={Row}>
                            <Form.Label className="radio" column sm={12}>
                                Select the Urgency Level:<br></br>
                            </Form.Label>
                            <Form.Check className="radioButtons"
                                type="radio"
                                label="Urgent"
                                name="selectedOption"
                                value="Urgent"
                                onChange={() => this.setState({ urgency: "Urgent" })}
                            />
                            <Form.Check className="radioButtons"
                                type="radio"
                                label="Standard"
                                name="selectedOption"
                                value="Standard"
                                onChange={() => this.setState({ urgency: "Standard" })}
                            />
                            <Form.Check className="radioButtons"
                                type="radio"
                                label="Low Priority"
                                name="selectedOption"
                                value="Low Priority"
                                onChange={() => this.setState({ urgency: "Low Priority" })}
                            />
                        </Form.Group>
                    </fieldset>

                    <Button variant="secondary" type="button" className="submit" onClick={this.addTicket}>Submit Ticket</Button>
                </form>
                </div>
            </div>
        );
    }
}

export default Ticket;