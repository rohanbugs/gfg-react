import { Component } from "react";

function Footer(props){
    return(
        <div>
            <p>Footer Component</p>
            <p>{props.fdata}</p>
        </div>
    )
}

export default Footer 
