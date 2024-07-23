import React, { useState } from "react";
import Product from "./Product";

export default function Products(){
    const [list,setList] = useState([
        {id:1, name:"Laptop 1", price:30_000},
        {id:2, name:"Laptop 2", price:30_000},
        {id:3, name:"Laptop 3", price:50_000},
        {id:4, name:"Laptop 4", price:20_000},
    ])
    return (
        <div>
            {
                list.map((item,index)=>(
                    <Product key={index} pro={item}/>
                ))
            }
        </div>
    )
}