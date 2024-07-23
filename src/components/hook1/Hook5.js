import React, { useState } from "react";

export default function Hook5(){
    const [student, setStudent] = useState({name:"",age:0})

    return(
        <div>

        <h1>Ten student: {student.name}</h1>
        <h1>Tuoi student: {student.age}</h1>

        <form>
            <input type="text" placeholder="Ten Student" value={student.name} onChange={(e)=>setStudent({...student, name:e.target.value})}/>
            <input type="number" placeholder="Tuoi Student" value={student.age} onChange={(e)=>setStudent({...student, age:e.target.value})}/>

        </form>
        </div>
    )
}