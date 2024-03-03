import { useState } from "react"


function Counter (){
    const [count, setCount] = useState(0);

    // increase counter value
    const addValue = () => {
        setCount(count + 1);
    }

    // decrease counter value
    const removeValue = () => {
        if (count <= 0) {
            return
        };
        setCount(count - 1);
    }

    return (
        <>
            <h1>Counter</h1>
            <div style={{display:"flex", justifyContent:"center"}}>
                <button style={{margin:"10px"}} onClick={removeValue}> - </button>
                <p>{count}</p>
                <button style={{margin:"10px"}} onClick={addValue}> + </button>
            </div>
        </>
    )
};


export default Counter;