import { useRef } from "react";



const UseRefWorkingWithInput = () => {

    let firstName = useRef();
    let lastName = useRef();

    const inputValBtn = () => {
        let fNAme = firstName.value;
        let lName = lastName.value;

        alert(fNAme + ' ' + lName)
    }
    
    return (
        <div>
            <h2>useRef Working With Input</h2><br />
            <input ref={(a) => firstName=a} type="text" placeholder="First Name"/><br />
            <input ref={(a) => lastName=a} type="text" placeholder="Last Name"/><br />
            <button onClick={inputValBtn}>Get Input Values</button>
        </div>
    );
};

export default UseRefWorkingWithInput;