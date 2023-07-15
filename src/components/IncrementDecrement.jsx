import { useState } from "react";

const IncrementDecrement = () => {

    const [increment, setIncrement] = useState(0)

    return (
        <div style={{marginTop:'30px', background:'pink', padding:'30px'}}>
            <h2>Increment Decrement function</h2>

            <button onClick={() => setIncrement(increment + 1)}>+</button> <span>{increment}</span> <button onClick={() => setIncrement(increment === 0 ? 0 : increment - 1)}>-</button>
            
            
        </div>
    );
};

export default IncrementDecrement;