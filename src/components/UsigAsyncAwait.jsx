import { useEffect, useState } from "react";


const UsigAsyncAwait = () => {

    let [data,setData] = useState()

    useEffect(() => {
        (async() => {
           let res = await fetch('https://dummyjson.com/products/2')
           let json = await res.json()
           setData(json);
        })()
    },[])

    return (
        <div style={{paddingTop:'50px'}}>
            <h2>useEffect calling api usig: async await</h2>
            <p>{JSON.stringify(data)}</p>
            
        </div>
    );
};

export default UsigAsyncAwait;

