import React from "react";
import axios from "axios";
import './View.css'
import Button from 'react-bootstrap/Button'

class ViewTicket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: [],
      oneTicket: {}
    };
    this.ticketName = React.createRef();
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    let url = "http://localhost:8080/tickets";
    axios.get(url).then(response => this.setState({ tickets: response.data }));
  };


  getOne = (event) => {
    var id = event.target.value;
    let url = "http://localhost:8080/tickets/" + id;
    axios.get(url).then(response => this.setState({ oneTicket: response.data }));
  };

  deleteOne = (event) => {
    var id = event.target.value;
    let url = "http://localhost:8080/tickets/" + id;
    axios.delete(url).then(response => {
      this.getData();
      this.setState({ oneTicket: {} })
    }).catch(err => {
      console.log(err);
    });
    this.getData();
  };

  complete = (event) => {
    var id = event.target.value;
    let url = "http://localhost:8080/tickets/" + id;
    console.log("test put");
    axios.put(url, { complete: true }).then(response => {
      this.getData();
      this.setState({ oneTicket: response.data });
    });
  };


  render() {

    let deleteButton;
    let completeButton;
    let display;

    if (Object.keys(this.state.oneTicket).length !== 0) {
      deleteButton = <Button variant="danger" type="button" value={this.state.oneTicket.id} onClick={this.deleteOne} className="delete-button">Delete</Button>;
      completeButton = <Button variant="success" type="button" value={this.state.oneTicket.id} onClick={this.complete} className="complete-button">Complete</Button>
      display = <div className="results">
        <p><span>Name:</span> {this.state.oneTicket.firstName} {this.state.oneTicket.lastName}</p>
        <p><span>Email:</span> {this.state.oneTicket.email}</p>
        <p><span>Tim Stamp:</span> {this.state.oneTicket.timeStamp}</p>
        <p><span>Complete Status:</span> {this.state.oneTicket.complete.toString()}</p>
        <p><span>Urgency:</span> {this.state.oneTicket.urgency}</p> 
        <p><span>Category:</span> {this.state.oneTicket.category}</p>
        <p><span>Content:</span> {this.state.oneTicket.content}</p>
      </div>;
    }

    return (
      <div>
        <h3 className="table-header">View Tickets</h3>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Category</th>
              <th>Urgency</th>
              <th>Complete Status</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tickets.map(p => (
              <tr key={p.id}>
                <td>{p.firstName} {p.lastName}</td>
                <td>{p.email}</td>
                <td>{p.category}</td>
                <td>{p.urgency}</td>
                <td>{p.complete.toString()}</td>
                <td><Button variant="secondary" type="button" value={p.id} onClick={this.getOne} className="view-button">View</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <hr></hr>
        {display}<br></br>
        {deleteButton}{completeButton}

      </div>

    );
  }
}

export default ViewTicket;