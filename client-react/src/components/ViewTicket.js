import React from "react";
import axios from "axios";
import '../task.min.css';
import ReactFlexyTable from "react-flexy-table";
import "react-flexy-table/dist/index.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../App.css";

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
          // empty single ticket display
          this.setState({ oneTicket: {}})
          setTimeout(this.refreshPage(), 5000)
        }).catch(err => {
          console.log(err);
        }); 
        // refresh the data
        // this.refreshPage();
    };

    complete = (event) => {
        var id = event.target.value;
        let url = "http://localhost:8080/tickets/" + id;
        axios.put(url, { complete: true }).then(response => {
          // refresh the data
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
            <button type="button" value={data.id} onClick={this.getOne} className="btn btn-primary">View</button>
          </div>
        }
      }]

      if (Object.keys(this.state.tickets).length !== 0) {
        
        var data = [];
        var item;
        for ( item of this.state.tickets) {
            data.push({"id": item.id, "First_Name" : item.firstName, "Last_Name": item.lastName, "Email": item.email, "Urgency": item.urgency, "Complete": item.complete});
        }
        table =  <ReactFlexyTable data={data} additionalCols={additionalCols} sortable globalSearch/>
      }; 

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
          <br></br>
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