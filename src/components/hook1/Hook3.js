import React, { useId, useState } from 'react'

export default function Hook3() {
    // const [name,setName]=useState("")
    const [a,setNumberA]=useState(0)
    const [b,setNumberB]=useState(0)
    // const [sum,congNumber]=useState(0)
    // function Cong(){
    //     congNumber( a*1 + b*1)
    // }
    const [kq,setKQ]=useState(0)
  return (
    <div>
      {/* <h1>Hook 3, name: {name}</h1> */}
      <h1>Hook 3, A: {a}</h1>
      <h1>Hook 3, A: {b}</h1>
      <h1>Ket qua: {kq}</h1>
      {/* <input type="text" placeholder='enter your name' value={name} onChange={(e)=>setName(e.target.value)}></input> */}
      <input type="number" placeholder='Nhap gia tri a' value={a} onChange={(e)=>setNumberA(e.target.value*1)}></input>
      <input type="number" placeholder='Nhap gia tri b' value={b} onChange={(e)=>setNumberB(e.target.value*1)}></input>
      {/* <button onClick={Cong}>Cong</button> */}
      <button onClick={()=>setKQ(a*1+b*1)}>+</button>
      <button onClick={()=>setKQ(a*1-b*1)}>-</button>
      <button onClick={()=>setKQ(a*1*b*1)}>*</button>
      <button onClick={()=>setKQ((a*1/b*1).toFixed(2))}>/</button>
    </div>
  )
}
