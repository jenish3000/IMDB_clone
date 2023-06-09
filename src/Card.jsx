import React from "react";
import { ReactDOM } from "react";
import './Card.css'
function Card(props){
    return(
        <>

        <div className="card">
        <a href={props.redirect}>

    <img src={props.link} className="card-image">
        
    </img>
        </a>
    <div className="category"> {props.title}  </div>
    <div className="heading"> {props.name}
    <div>   {props.date}</div>
    </div>
    </div>

        </>
    )
     
}

export default Card