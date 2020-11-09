import React from 'react'
import Card from './CardUi'

// import IMG_1 from 'https://media-exp1.licdn.com/dms/image/C5103AQEFNvlsjPks7w/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=9O_lO6MZ_rLRwc5Ilmy10WWlaMQ_CXI5n2ZLHPVJO1Q';
import Beckie_Rich from './Assets/Beckie_Rich.jpg'
import Brian_Lewis from './Assets/Brian_Lewis.jpg'
import Scott_Thompson from './Assets/Thompson_Scott.jpg'
import Chris_Whiting from './Assets/Chris_Whiting.jpg'
import Gio_Nava from './Assets/Gio_Nava.jpg'



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
                    
                        <Card imgsrc= {Brian_Lewis} title= "Brian Lewis" text="Junior Developer"></Card> 
                        <a  className="links" href="https://www.linkedin.com/in/briandlewis0612/" target="_blank"><i class="fab fa-linkedin"></i></a>
                        
                    </div>
                    <div className="col-lx">
                        <Card imgsrc= {Gio_Nava} title= "Giovanni Nava" text="Junior Developer"  />
                        <a  className="links" href="https://www.linkedin.com/in/giovannie-nava" target="_blank"><i class="fab fa-linkedin"></i></a>
                    </div>
                    <div className="col-lx">
                        <Card imgsrc={Chris_Whiting} title= "Chris Whiting" text="Junior Developer"/>
                        <a  className="links" href="https://www.linkedin.com/in/chris-whiting-4b817a120/" target="_blank"><i class="fab fa-linkedin"></i></a>
                    </div>
                    <div className="col-lx">
                        <Card imgsrc={Beckie_Rich} title= "Beckie Rich" text="Junior Developer"/>
                        <a  className="links" href="https://www.linkedin.com/in/beckie-rich-22164254/" target="_blank"><i class="fab fa-linkedin"></i></a>
                    </div>
                    <div className="col-lx">
                        <Card imgsrc={Scott_Thompson} title= "Scott Thompson" text="Junior Developer"/>
                        <a  className="links" href="https://www.linkedin.com/in/scott-thompson-7ba618199/" target="_blank"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;