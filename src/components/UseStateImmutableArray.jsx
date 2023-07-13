import { useState } from "react";


const UseStateImmutableArray = () => {

    const [list, setList] = useState([]);
    const [item, setItem] = useState("");

    const addToList = () => {
        list.push(item)
        setList([...list])
    }

    const removeItem = (key) => {
        list.splice(key, 1)
        setList([...list])
    }
  
    return (
        <div>
            <br /><br />
            <h2>useState Working With Immutable Array</h2>
            <h3>TODO Simple APP with useState</h3>

            <h4>Total Items: {list.length}</h4>
            <input onChange={(e) => setItem(e.target.value)} type="text" placeholder='ADD ITEM' />
            <button onClick={addToList}>Add</button>
            <br />
            
            <ul>
                {
                    list.length !== 0 ? (
                        list.map((element, key) => {
                            return(
                                <li className={key}>{element} <button onClick={() => {removeItem(key)}}>Delete</button></li>
                            )
                        })
                    ) : (<li></li>)
                }
            </ul>
        </div>
    );
};

export default UseStateImmutableArray;