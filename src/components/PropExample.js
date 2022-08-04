
import React from "react";

function PropExample(props){
    function Fname(){
        let data = 'good boy'
        return (
            <div><h1>{data}</h1></div>
        )
    }
       return(
        <div>
            <h1>My name is {props.name}</h1>
            <Fname />
           
        </div>
    ) 
}


export default PropExample