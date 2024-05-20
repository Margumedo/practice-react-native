import { useState } from "react"


export function Counter(){
    
    const [count, setCount] = useState(10);

    const increseBy = (num: number)=> setCount(count + num)
    
    return(
        <div>
            <h2>Counter: <small>{count}</small></h2>
            <div>
                <button onClick={()=>increseBy(+1)} >+1</button>
                &nbsp;
                <button onClick={()=>increseBy(-1)} >-1</button>
            </div>
            
        </div>
    )
}