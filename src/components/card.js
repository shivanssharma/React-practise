import React from "react";
import Avatar from "./avatar.js";
import Details from "./details.js";
function Card(props){
    console.log(props)
    return(
        <div className="card">
            <div>
                <h2>{props.name}</h2>
                <p>{props.id}</p>
                <Avatar img={props.imag} />
            </div>
            <div>
                {/* <p>details is {props.number}</p>
                <p>detail is {props.email}</p> */}
                <Details detailsinfo={props.number} />
                <Details detailsinfo={props.email} />
            </div>
        </div>
    );
}
export default Card;