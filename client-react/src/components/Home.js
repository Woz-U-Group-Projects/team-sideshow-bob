import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import IMG_1 from './Assets/IMG_1.jpg';
import IMG_2 from './Assets/IMG_2.jpg';
import IMG_3 from './Assets/IMG_3.jpg';
import './Stylesheets/Home.css';

class Home extends React.Component {
    render() {
        return (

            <div>          
                <div className='container-fluid' >
                    <Carousel>
                        <Carousel.Item>
                            <img className="d-block w-100" src={IMG_2} alt="computer" />
                            <Carousel.Caption className="Caption">
                                <h3>Computer Problems?</h3>
                            </Carousel.Caption>
                        </Carousel.Item >
                        <Carousel.Item>
                            <img className="d-block w-100" src={IMG_1} alt="code" />
                            <Carousel.Caption className="Caption">
                                <h3>Create a ticket</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={IMG_3} alt="glasses" />
                            <Carousel.Caption className="Caption">
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