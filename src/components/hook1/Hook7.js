import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap'
import axios from 'axios'
export default function Hook7() {
    const [count,setCount] = useState(1)
    const [number, setNumber] = useState(1)
    useEffect(()=>{
        console.log("Side effect")

        const x = setInterval(()=>{
            console.log("load count")
            setCount(preState => preState + 1)
        },10)
        return ()=> {
            clearInterval(x)
            console.log("day la cleaned up")
        }

    }, [count,number])
    console.log("Render Hook7")
  return (
    <div>
      <h1>Tim hieu useEffect</h1>
      <p>Count: {count}</p>
      <button onClick={()=>setCount(count + 1)}>Count up</button>
      <p>Number: {number}</p>
      <button onClick={()=>setNumber(number + 1)}>Number up</button>
    </div>
  )
}
