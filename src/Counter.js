import React, { useState } from "react";


function Counter(){
 
    const[count, setCount] = useState(0);

    const handleChangeCounter = e => setCount(Number(e.target.value));

  return (
    <div>
        <input type="text" value={count} onChange={handleChangeCounter} className="input" />
        <p className="p">The counter is at : {count} </p>
      
        <div className="buttons">
             <button onClick={() => setCount(count + 1)}>
                +1
            </button>
            <button onClick={() => setCount(count - 1)}>
                -1
            </button>
        </div>
    </div>
  );
}


export default Counter;