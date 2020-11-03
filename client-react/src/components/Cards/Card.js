import React from 'react'
import Card from './CardUi'

// import IMG_1 from 'https://media-exp1.licdn.com/dms/image/C5103AQEFNvlsjPks7w/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=9O_lO6MZ_rLRwc5Ilmy10WWlaMQ_CXI5n2ZLHPVJO1Q';
import Chris_Whiting from '../assets/Chris_Whiting.jpg'
import Beckie_Rich from '../assets/Beckie_Rich.jpg'
import Thompson_Scott from '../assets/Thompson_Scott.jpg'



class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state={};

    }

  
      

    render() {
        return(
            <div className= "container-fluid1 d-flex justify-content-center">
                <div className="row">
                    <div className="col-lx">
                        <Card imgsrc= {{}} title= "Giovanni Nava" text="Junior Developer"></Card> 
                    </div>
                    <div className="col-lx">
                        <Card imgsrc= {{}} title= "Brian Lewis" text="Junior Developer"/>
                    </div>
                    <div className="col-lx">
                        <Card imgsrc={Chris_Whiting} title= "Chris Whiting" text="Junior Developer"/>
                    </div>
                    <div className="col-lx">
                        <Card imgsrc={Beckie_Rich} title= "Beckie Rich" text="Junior Developer"/>
                    </div>
                    <div className="col-lx">
                        <Card imgsrc={Thompson_Scott} title= "Scott Thompson" text="Junior Developer"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;