import React from "react";
import axios from "axios";
import '../task.min.css';

class ViewTicket extends React.Component {
    constructor(props) {
      super(props);
      this.state = { tickets: [], 
                    oneTicket: {} };
      this.ticketName = React.createRef();
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
  
  
    getOne = (event) => {
        var id = event.target.value;
        let url = "http://localhost:8080/tickets/" + id;
        axios.get(url).then(response => this.setState({ oneTicket: response.data }));
        // axios.get(url).then(response => console.log(response.data));
    };
  
    deleteOne = (event) => {
        var id = event.target.value;
        let url = "http://localhost:8080/tickets/" + id;
        // var heads={ 'Access-Control-Allow-Origin': true}
        axios.delete(url).then(response => {
          this.getData();
          // empty single ticket display
          this.setState({ oneTicket: {}})}).catch(err => {
          console.log(err);
        }); 
        // refresh the data
        this.getData();
    };

    complete = (event) => {
        var id = event.target.value;
        let url = "http://localhost:8080/tickets/" + id;
        // var heads={ 'Access-Control-Allow-Origin': true}
        console.log("test put");
        axios.put(url, { complete: true }).then(response => {
          // refresh the data
          this.getData();
          this.setState({ oneTicket: response.data });
        });
      };


    render() {
      
      let deleteButton;
      let completeButton;
      let display;

      if (Object.keys(this.state.oneTicket).length !== 0) {
        deleteButton = <button type="button" value={this.state.oneTicket.id} onClick={this.deleteOne} className="btn btn-danger">Delete</button>;
        completeButton = <button type="button" value={this.state.oneTicket.id} onClick={this.complete} className="btn btn-success">Complete</button>
        display = <div>
                  <p>Name: {this.state.oneTicket.firstName} {this.state.oneTicket.lastName}</p>
                  <p>Email: {this.state.oneTicket.email}</p>
                  <p>Time Stamp: {this.state.oneTicket.timeStamp}</p>
                   <p>Complete Status: {this.state.oneTicket.complete.toString()}</p>
                   <p>Urgency: {this.state.oneTicket.urgency} , Category: {this.state.oneTicket.category}</p>
                   <p>Content: {this.state.oneTicket.content}</p>
                   </div>;
      };

      return (
        <div>
          <h3>This is our Ticket Component</h3>
    
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Category</th>
                <th>Urgency</th>
                <th>Complete Status</th>
                <th>View Ticket</th>
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
                  <td><button type="button" value={p.id} onClick={this.getOne} className="btn btn-primary">View</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr></hr>
          {/* <ul>
            {this.state.tickets.map(p => (
              <li key={p.id}>
                  {p.firstName} {p.lastName} <button type="button" value={p.id} onClick={this.getOne}>View</button>
              </li>
            ))}
          </ul> */}
                {display}<br></br>
                {deleteButton}{completeButton}
                
        </div>

      );
    }
  }
  
  export default ViewTicket;