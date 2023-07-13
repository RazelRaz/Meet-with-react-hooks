import { useState } from "react";

const UseStateUnderstadingInside = () => {

    const [number, setNumber] = useState(0)

    return (
        <div>
            <h1>useState Understading Inside</h1>
            <br /><br />
            <h6>Number:{number}</h6>
            <button onClick={()=>setNumber(number+1)}>Click To Increase Number</button>
            <button onClick={()=>setNumber(0)}>Reset Number</button>
        </div>
    );
};

export default UseStateUnderstadingInside;

