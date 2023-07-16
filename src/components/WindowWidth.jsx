import { useEffect, useState } from "react";


const WindowWidth = () => {

    const [windowSize, setWindowSize] = useState(window.screen.width);

    const currentScreenWidth = () => {
        setWindowSize(() => window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", currentScreenWidth);
        return () => {
            window.removeEventListener("resize", currentScreenWidth)
        }
    })

    return (
        <div style={{padding:'50px 50px', background:'#ccc'}}>
            <h1>Size of  my WIndow Width: {windowSize}</h1>
        </div>
    );
};

export default WindowWidth;

