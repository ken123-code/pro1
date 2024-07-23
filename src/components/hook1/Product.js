import React from "react";

export default function Product(props){
    const {pro} = props
    return(
        <div>
            <h1>{pro.name}</h1>
            <p>{pro.price}</p>
        </div>
    )
}