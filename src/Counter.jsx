import React, { useState } from "react";
import CountDisplay from "./CountDisplay";

function Counter({count, increment, decrement}){

    

    return (
        <>

            <CountDisplay count={count} />

            <button onClick={increment}>Increment</button>

            <button onClick={decrement}>Decrement</button>
        
            
        </>

    )
}

export default Counter;