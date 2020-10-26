import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import IMG_1 from '../assets/IMG_1.jpg';
import IMG_2 from '../assets/IMG_2.jpg';
import IMG_3 from '../assets/IMG_3.jpg';

class Home extends React.Component {
    render() {
        return (

            <div>
                <div class='container-fluid' >
                    <div className="row title" style={{ marginBottom: "20px" }} >
                        <div class="col-sm-12 btn btn-warning">
                            Create a Ticket
                         </div>
                    </div>
                </div>
                <div className='container-fluid' >
                    <Carousel>
                        <Carousel.Item style={{ 'height': "500px" }} >
                            <img style={{ 'height': "500px" }}
                                className="d-block w-100"
                                src={IMG_2}
                                alt="computer" />
                            <Carousel.Caption>
                                <h3>Computer Problems?</h3>
                            </Carousel.Caption>
                        </Carousel.Item  >
                        <Carousel.Item style={{ 'height': "500px" }}>
                            <img style={{ 'height': "500px" }}
                                className="d-block w-100"
                                src={IMG_1}
                                alt="george" />
                            <Carousel.Caption>
                                <h3>Create a ticket</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{ 'height': "500px" }}>
                            <img style={{ 'height': "500px" }}
                                className="d-block w-100"
                                src={IMG_3}
                                alt="face" />
                            <Carousel.Caption>
                                <h3>Help is on the way!</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

        )

    }

}
export default Home;