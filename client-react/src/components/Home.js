import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import IMG_1 from '../assets/IMG_1.jpg';
import IMG_2 from '../assets/IMG_2.jpg';
import IMG_3 from '../assets/IMG_3.jpg';
import './Home.css';

class Home extends React.Component {
    render() {
        return (

            <div>          
                <div className='container-fluid' >
                    <Carousel>
                        <Carousel.Item style={{ 'height': "750px" }} >
                            <img style={{ 'height': "800px", 'object-fit': "contain" }}
                                className="d-block w-100"
                                src={IMG_2}
                                alt="computer" />
                            <Carousel.Caption>
                                <h3 style={{'color': "blue"}}>Computer Problems?</h3>
                            </Carousel.Caption>
                        </Carousel.Item >
                        <Carousel.Item style={{ 'height': "750px" }}>
                            <img style={{ 'height': "800px", 'object-fit': "contain" }}
                                className="d-block w-100"
                                src={IMG_1}
                                alt="code" />
                            <Carousel.Caption>
                                <h3 style={{'color': "blue"}}>Create a ticket</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{ 'height': "750px"  }}>
                            <img style={{ 'height': "800px",'object-fit': "contain" }}
                                className="d-block w-100"
                                src={IMG_3}
                                alt="glasses" />
                            <Carousel.Caption>
                                <h3 style={{'color': "blue"}}>Help is on the way!</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

        )

    }

}
export default Home;