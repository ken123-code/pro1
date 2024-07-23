import React, { useState } from "react";
import { Button, Input } from "reactstrap";


export default function Footer(props) {
  const {setFlag, checkAll} = props
  return (
    <div className="my-3">
      <Input type="checkbox" checked={checkAll} onChange={()=>setFlag("CHECKALL")}/>
      <Button className="btn-success mx-1" onClick={()=>setFlag("CHECK")}>filter check</Button>
      <Button className="btn-success mx-1" onClick={()=>setFlag("NOCHECK")}>filter no check</Button>
      <Button className="btn-success mx-1" onClick={()=>setFlag("")}>clear check</Button>
      <Button className="btn-success mx-1" onClick={()=>setFlag("DELETEALL")}>DELETE ALL</Button>
    </div>
  )
}
