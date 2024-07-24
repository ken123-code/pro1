import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function API1() {
    const [data,setData] = useState([])
    const fetchAPI = () => {
        const url = "https://66a07be77053166bcabb8fcc.mockapi.io/student"
        axios.get(url)
        .then(function(res){
            console.log(res)
            setData(res.data)
        })
        .catch(function(error){
            console.log(error)
        })
    }
    useEffect(()=>{
        fetchAPI()
    },[])
  return (
    <div>
      API1
      {
        data.map((item,index)=>(
            <h1 key={index}>{item.id} {item.name}</h1>
        ))
      }
    </div>
  )
}
