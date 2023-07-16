import { useEffect, useState } from "react";


const ArgumentsAndUses = () => {

    const [data, setData] = useState()

    useEffect(() => {
        fetch('https://dummyjson.com/products/2')
            .then(res => res.json())
            .then(json => setData(json))
    }, [])

    return (
        <div style={{paddingTop:'50px'}}>
            <h1>Im UseEffect Method : fetch</h1>
            <p>{JSON.stringify(data)}</p>
        </div>
    );
};

export default ArgumentsAndUses;

