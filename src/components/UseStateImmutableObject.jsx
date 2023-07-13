import { useState } from "react";


const UseStateImmutableObject = () => {

    const [myObj, setMyObj] = useState({
        ke1: 'Value 1',
        ke2: 'Value 2',
        ke3: 'Value 3',
    })

    const changeValue = () => {
        setMyObj(
            prevObj => ({
                ...prevObj,
                ke2: "CHnaged the value of key 2"
            })
        )
    }

    return (
        <div>
            <h2>useState Working With Immutable Object</h2>
            <h6>{myObj.ke2}</h6>
            <button onClick={changeValue}>Change Obaject Value</button>
        </div>
    );
};

export default UseStateImmutableObject;