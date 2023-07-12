import { useRef } from "react";


const PersistedMutableProperty = () => {

    let number = useRef(0);

    const mutableClick = () => {
        number.current++
        console.log(number.current);
    }

    return (
        <div>
            <h2>useRef Working With Persisted Mutable Property</h2><br />
            <button onClick={mutableClick}>Persisted Mutable Property</button>
        </div>
    );
};

export default PersistedMutableProperty;

