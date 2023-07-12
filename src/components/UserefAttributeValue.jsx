import { useRef } from "react";


const UserefAttributeValue = () => {

    const myImg = useRef()

    const changeImage = () => {
        myImg.current.src="https://placehold.co/600x400/orange/white";
        myImg.current.setAttribute('width', '800px');
    }

    return (
        <div>
            <h1>[Hook] useRef Working With Attribute</h1>

            <img ref={myImg} src="https://placehold.co/600x400/png" alt="image"/>
            <button onClick={changeImage}>CLick</button>
        </div>
    );
};

export default UserefAttributeValue;