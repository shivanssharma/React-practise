import React from "react";
function New(props){
    // console.log(props)
    return(
        <div className="card">
            <div>
                <span>{props.title}</span>
                <span>{props.content}</span>
            </div>
        </div>
    );
}
export default New;