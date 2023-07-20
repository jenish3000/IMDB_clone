import React from "react";
import { ReactDOM } from "react";
import './Card.css'
function Card(props){
    return(
        <>
        <div className="all">


        <div className="card">
        <a href={props.redirect}>

    <img src={props.link} className="card-image">
        
    </img>
        </a>
    <div className="category"> {props.title}  </div>
    <div className="heading12"> 
    {props.date}
    </div>
    </div>
        </div>

        </>
    )
     
}

export default Card