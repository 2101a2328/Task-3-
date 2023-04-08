import React from 'react'
import { useState } from "react";
function Count() {
    const [count, setCount] = useState(0);
    const handleSelect =(e)=>{
        setCount(count+1);
    }
  return (
    <div className='App'>
        <hr/>
 <h1 className='count'>Count:{count}</h1>
            
            <button className='button' onClick={handleSelect}>Add</button>
    </div>
  )
}

export default Count