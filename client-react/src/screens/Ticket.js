import React from "react";
import axios from "axios";
import '../ticket.min.css'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class Ticket extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        content: "",
        category: "",
        urgency: "",
        tickets: [],
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

    getData = () => {
        let url = "http://localhost:8080/tickets";

        axios
            .get(url)
            .then((response) => this.setState({ tickets: response.data }));
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>First Name:</label>
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                    <br></br>
                    <label>Last Name:</label>
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                    <br></br>
                    <label>Email:</label>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                    <br></br>
                    <label>
                        Select a Category:<br></br>
                        <select value={this.state.category} onChange={(e) => this.setState({ category: e.target.value })}>
                            <option value="hardware">Hardware</option>
                            <option value="software">Software</option>
                            <option value="internet">Internet</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                    <label>Please Describe Your Issue:</label>
                    <br></br>
                    <textarea value={this.state.content} name="content" onChange={this.handleChange} />
                    <label>
                        Select the Urgency Level:<br></br>
                        <input
                            type="radio"
                            name="selectedOption"
                            value="Urgent"
                            checked={this.state.selectedOption === "Urgent"}
                            onChange={this.handleChange}
                        />
                            Urgent<br></br>
                        <input
                            type="radio"
                            name="selectedOption"
                            value="Normal"
                            checked={this.state.selectedOption === "Normal"}
                            onChange={this.handleChange}
                        />
                            Normal<br></br>
                        <input
                            type="radio"
                            name="selectedOption"
                            value="Low Priority"
                            checked={this.state.selectedOption === "Low Priority"}
                            onChange={this.handleChange}
                        />
                            Low Priority
              </label>

                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.addTicket}
                    >
                        Submit
              </button>
                </form>

                <h3>Pending Tickets</h3>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.getData}
                >
                    Show Pending
            </button>
                <ul>
                    {this.state.tickets.map(p => (
                        <li key={p.id}>

                            <b>First Name:</b>{p.firstName} <b>Last Name:</b>{p.lastName} <b>Email:</b>{p.email} <b>Issue:</b>{p.content} <b>Category:</b>{p.category} <b>Urgency:</b>{p.urgency}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
export default Ticket;