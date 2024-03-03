import { useEffect, useState } from "react";


export default function Timer(){

    let [counter, setCounter] = useState(0)
    useEffect(()=>{
        // mount / update methods are here 
        let timer = setInterval(() => {
            console.log("Window width", window.innerWidth);
        }, 1000);

        // unmount all services here
        return(clearInterval(timer))
    });

    return (
        <>
            <h1>Side Effect useEffect</h1>
        </>
    )
}