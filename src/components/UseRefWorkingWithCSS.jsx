import { useRef } from "react";


const UseRefWorkingWithCSS = () => {

    const cssPara = useRef();

    const changeParaCLass = () => {
        cssPara.current.classList.remove('text-success');
        cssPara.current.classList.add('text-danger');
    }

    return (
        <div>
            <h2>useRef Working With CSS</h2><br />

            <p className="text-success" ref={cssPara}>Im from useRef</p>
            <button onClick={changeParaCLass}>Change Paragraph class</button>
        </div>
    );
};

export default UseRefWorkingWithCSS;