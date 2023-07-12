import { useRef } from "react";


const UserefInnerText = () => {

    let myHead = useRef();
    let myPara = useRef()

    const insertText = () => {
        myHead.innerText="Hello from useRef";
    }

    const insertPara = () => {
        myPara.innerText="This component is a expample of useRef"
    }

    return (
        <div>
            <h1>UseRef Eample - InnerText</h1>


            <h2 ref={(h2) => myHead=h2}></h2>
            <p ref={(p) => myPara=p}></p>
            <button onClick={insertText}>Click</button>
            <button onClick={insertPara}>View Paragraph</button>
        </div>
    );
};

export default UserefInnerText;