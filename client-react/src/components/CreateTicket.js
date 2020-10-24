import React from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './Form.css'

class CreateTicket extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        firstName: "",
        lastName: "",
        email: "",
        content: "",
        category: "",
        urgency: "",
        tickets: [],
    })

    componentWillMount() {
        this.initialState = this.state
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            content: '',
            category: '',
            urgency: '',
        })
    };

    addTicket = () => {
        let url = "http://localhost:8080/tickets";
        axios.post(url, {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            content: this.state.content,
            category: this.state.category,
            urgency: this.state.selectedOption
        }).then(response => {
            alert('Your ticket has been submitted');
        });

    };
    resetState = () => {
        this.setState(this.getInitialState());
    }

    getData = () => {
        let url = "http://localhost:8080/tickets";

        axios
            .get(url)
            .then((response) => this.setState({ tickets: response.data }));
    };

    render() {
        return (
            <div>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="Input">
                    <Form.Control type="text" name="firstName" placeholder= "First Name" value={this.state.firstName} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group className="Input">
                    <Form.Control type="text" name="lastName" placeholder= "Last Name" value={this.state.lastName} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group className="Input">
                    <Form.Control type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                    </Form.Group>
                    <br></br>

                    <Form.Group className="dropdown">
                        <Form.Label>Select a Category:</Form.Label>
                        <Form.Control as="select" value={this.state.category} onChange={(e) => this.setState({ category: e.target.value })}>
                            <option value="hardware">Hardware</option>
                            <option value="software">Software</option>
                            <option value="internet">Internet</option>
                            <option value="other">Other</option>
                        </Form.Control>
                    </Form.Group>
                    <br></br>

                    <Form.Group className="Issue">
                    <Form.Label>Please Describe Your Issue:</Form.Label>
                    <Form.Control as="textarea" rows="7" value={this.state.content} name="content" onChange={this.handleChange} />
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
                            checked={this.state.selectedOption === "Urgent"}
                            onChange={this.handleChange}
                        />
                        <Form.Check className="radioButtons"
                            type="radio"
                            label="Standard"
                            name="selectedOption"
                            value="Standard"
                            checked={this.state.selectedOption === "Standard"}
                            onChange={this.handleChange}
                        />
                        <Form.Check className="radioButtons"
                            type="radio"
                            label="Low Priority"
                            name="selectedOption"
                            value="Low Priority"
                            checked={this.state.selectedOption === "Low Priority"}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    </fieldset>
                    <br></br>
                    <br></br>

                    <Button variant="secondary" type="button" className="submit" onClick={this.addTicket}>Submit Ticket</Button>
                </Form>

                <br></br>

                {/* <h3 className="Input">Pending Tickets</h3>
                    <Button variant="secondary" type="button" className="submit" onClick={this.getData}>Show Pending</Button>
                <ul>
                    {this.state.tickets.map(p => (
                        <li key={p.id}>

                            <b>First Name:</b>{p.firstName} <b>Last Name:</b>{p.lastName} <b>Email:</b>{p.email} <b>Issue:</b>{p.content} <b>Category:</b>{p.category} <b>Urgency:</b>{p.urgency}
                        </li>
                    ))}
                </ul> */}
            </div>
        );
    }
}
export default CreateTicket;