import React from 'react'
import Card from './CardUi'

import IMG_1 from '../assets/IMG_1.jpg'
import IMG_2 from '../assets/IMG_2.jpg'
import IMG_3 from '../assets/IMG_3.jpeg'
import IMG_4 from '../assets/IMG_4.jpeg'


class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state={};

    }

    render() {
        return(
            <div className= "container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={IMG_1} title= "Name" link=  "https://www.linkedin.com/"></Card> 
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={IMG_2} title= "Name"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={IMG_3} title= "Name"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={IMG_4} title= "Name"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;