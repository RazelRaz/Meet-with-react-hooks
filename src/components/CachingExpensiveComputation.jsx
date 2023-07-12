import { useRef } from "react";


const CachingExpensiveComputation = () => {

    let APIData = useRef(null);
    let myCompPtag = useRef()

    const fetchData = async () => {
       const res = await fetch("https://dummyjson.com/products")
       APIData.current = await res.json();
    }

    const showData = () => {
        myCompPtag.current.innerText = JSON.stringify(APIData.current)
    }

    return (
        <div>
            <h2>useRef Caching Expensive Computation</h2><br /><br />

            <p ref={myCompPtag}></p>
            <button onClick={fetchData}>Call API</button>
            <button onClick={showData}>Show Data</button>
        </div>
    );
};

export default CachingExpensiveComputation;