import React from 'react'
import Card from './CardUi'
import Beckie_Rich from './Assets/Beckie_Rich.jpg'
import Thompson_Scott from './Assets/Thompson_Scott.jpg'



class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }




    render() {
        return (
            <div className="container-fluid1 d-flex justify-content-center">
                <div className="row">
                    <div className="col-lx">
                        <Card imgsrc={{}} title="Giovanni Nava" text="Junior Developer"></Card>
                    </div>
                    <div className="col-lx">
                        <Card imgsrc={{}} title="Brian Lewis" text="Junior Developer" />
                    </div>
                    <div className="col-lx">
                        <Card imgsrc={{}} title="Chris Whiting" text="Junior Developer" />
                    </div>
                    <div className="col-lx">
                        <Card imgsrc={Beckie_Rich} title="Beckie Rich" text="Junior Developer" />
                    </div>
                    <div className="col-lx">
                        <Card imgsrc={Thompson_Scott} title="Scott Thompson" text="Junior Developer" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;