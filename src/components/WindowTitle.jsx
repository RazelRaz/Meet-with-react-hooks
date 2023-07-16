import { useEffect, useState } from "react";


const WindowTitle = () => {

    const [increment, setIncrement] = useState(0);

    const countUpdate = (value) => {
        if(value === 'inc') return setIncrement(increment + 1)
        if(value === 'dec') return setIncrement(increment - 1)
    }

    useEffect(() => {
        document.title = increment
    })

    return (
        <div style={{padding:'50px 50px', background:'pink'}}>
            <h1>CHange Window title</h1>
            <button onClick={() => countUpdate('inc')}>+</button> {increment} <button onClick={() => countUpdate('dec')}>-</button>
        </div>
    );
};

export default WindowTitle;