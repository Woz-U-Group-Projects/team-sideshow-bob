import React from 'react'
import Card from './CardUi'

// import IMG_1 from 'https://media-exp1.licdn.com/dms/image/C5103AQEFNvlsjPks7w/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=9O_lO6MZ_rLRwc5Ilmy10WWlaMQ_CXI5n2ZLHPVJO1Q';
// import IMG_2 from '../assets/IMG_2.jpg';
// import IMG_3 from '../assets/IMG_3.jpeg';

import IMG_4 from '../assets/IMG_4.jpeg'



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
                        <Card imgsrc= "https://media-exp1.licdn.com/dms/image/C5103AQEFNvlsjPks7w/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=9O_lO6MZ_rLRwc5Ilmy10WWlaMQ_CXI5n2ZLHPVJO1Q" 
                        title= "Giovanni Nava" link=""></Card> 
                    </div>
                    <div className="col-lx">
                        <Card imgsrc= "https://media-exp1.licdn.com/dms/image/C4E03AQHYUqVmPdEn_Q/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=TG8ACNxnGKRPEy47elgDJoZ-ryt0Hzl7MbpWPMasiK8" 
                        title= "Brian Lewis"/>
                    </div>
                    <div className="col-lx">
                        <Card imgsrc="https://media-exp1.licdn.com/dms/image/C4E35AQHIAay3tM35uA/profile-framedphoto-shrink_200_200/0?e=1603756800&v=beta&t=6UoI-yzd1c5btPFPgeyf7L0fYMHuvecMXxS6Em9plIY"
                         title= "Chris Whiting"/>
                    </div>
                    <div className="col-lx">
                        <Card imgsrc="https://media-exp1.licdn.com/dms/image/C4E35AQG3Zal3_emszg/profile-framedphoto-shrink_200_200/0?e=1603760400&v=beta&t=lBeRnsarsGEIDoJIdmAYlOa9nmrJAuKVQa1tT_D_FxM"
                        title= "Name"/>
                    </div>
                    <div className="col-lx">
                        <Card imgsrc={IMG_4} title= "Name"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;