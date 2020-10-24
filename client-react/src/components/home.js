import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends React.Component {
    render() {
        return (
            
            <Container>
                <Row className="justify-content-md-center">
                <Col xs lg="10">
                <br></br>
                    <Jumbotron>

                    <h1>Welcome to Ticket Creater App.</h1><br></br>
                    <p>
                        Thank you for visiting our application.  Please feel free to create and or view tickets.
                    </p>

                    </Jumbotron>
                </Col>

            </Row>
            </Container>

        );
    }
}
export default Home;