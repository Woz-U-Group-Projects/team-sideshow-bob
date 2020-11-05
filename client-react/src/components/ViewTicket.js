import React from "react";
import axios from "axios";
import './Stylesheets/View.css'
import Button from 'react-bootstrap/Button'
import ReactFlexyTable from 'react-flexy-table';
import "react-flexy-table/dist/index.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../App.css";

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
      setTimeout(this.refreshPage(), 5000)
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
      setTimeout(this.refreshPage(), 5000)
    });
  };

  refreshPage = () => {
    window.location.reload(false);
  };

  render() {

    let deleteButton;
    let completeButton;
    let display;
    let table;

    const additionalCols = [{
      header: "View",
      td: (data) => {
        return <div>
          <Button variant = "secondary" type="button" value={data.id} onClick={this.getOne} className="btn btn-primary">View</Button>
        </div>
      }
    }]

    if (Object.keys(this.state.tickets).length !== 0) {
      var data = [];
      var item;
      for (item of this.state.tickets) {
        data.push({ "id": item.id, "First_Name": item.firstName, "Last_Name": item.lastName, "Email": item.email, "Urgency": item.urgency, "Category": item.category, "Complete": item.complete });
      }
      table= <ReactFlexyTable data={data} additionalCols={additionalCols} sortable globalSearch />
    }

    if (Object.keys(this.state.oneTicket).length !== 0) {
      deleteButton = <Button variant="danger" type="button" value={this.state.oneTicket.id} onClick={this.deleteOne} className="delete-button">Delete</Button>;
      completeButton = <Button variant="success" type="button" value={this.state.oneTicket.id} onClick={this.complete} className="complete-button">Complete</Button>
      display = <div className="results">
        <p><span>Name:</span> {this.state.oneTicket.firstName} {this.state.oneTicket.lastName}</p>
        <p><span>Email:</span> {this.state.oneTicket.email}</p>
        <p><span>Time Stamp:</span> {this.state.oneTicket.timeStamp}</p>
        <p><span>Complete Status:</span> {this.state.oneTicket.complete.toString()}</p>
        <p><span>Urgency:</span> {this.state.oneTicket.urgency}</p>
        <p><span>Category:</span> {this.state.oneTicket.category}</p>
        <p><span>Content:</span> {this.state.oneTicket.content}</p>
      </div>;
    }

    return (

      <div>
        <h3 className="table-header">View Tickets</h3>
        <Container fluid>
          <Row>
          <Col lg="8" xlg={8}>{table}</Col>

          <Col lg="4" xlg={4}>
              {display}
              <br></br>
              {deleteButton}{completeButton}</Col>

          </Row>
        </Container>

      </div>

    );
  }
}

export default ViewTicket;