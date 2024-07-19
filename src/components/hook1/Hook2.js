import { useState } from "react";

function Hook2(){
    const [number, setNumber] = useState(10)
    function handle_Number_up(){
        setNumber(number + 10)// count = count + 1
    }
    return (
        <div>
            <h1>Tim hieu useState</h1>
            <p>Number : {number}</p>
            <button onClick={handle_Number_up}>Number up</button>
        </div>
    )
}

export default Hook2