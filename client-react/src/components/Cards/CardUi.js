import React, {useState} from 'react'
import "./cardStyle.css";



const Card = props => {

    function Ahref() {

        const [state,setState]=useState(false);
        let url="";
        return (
          <div className="Ahref">
           <a href={url}>LinkedIn handle</a>
          </div>
        );
      }
    
      const [state,setState]=useState(true);
      


return (
    <div className="card text-center">
        <div className="overflow">
            <img src= {props.imgsrc} alt="Image 1" className="card-img-top" />
        </div>
    <div className="card-body text-dark">
    <h4 className="card-title">{props.title}</h4>
    <p className="card-text text-secondary">{props.text} </p>
    {/* <a href='#' className="btn btn-outline-success">{props.button}</a> */}
    </div>
    </div>

)

}

export default Card;