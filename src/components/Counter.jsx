
import { useState } from 'react'
import './Style/CounterButton.css'

export default  function Counter(){

    const [count, setCount] = useState(0)

    function increment(by){
        setCount(count + by)
    }

    function decrement(by){
        setCount(count - by)

    }

    function resetCount(){
        setCount(0)
    }

    return(
            <>
                <div className="count">
                    {count}
                </div>
                <CounterButton by = {1} increment={increment} decrement={decrement}/>
                <CounterButton by = {2} increment={increment} decrement={decrement}/>
                <CounterButton by = {5} increment={increment} decrement={decrement}/>
                <ResetButton resetFunction={resetCount}/>
                
            </>
    )

}


function CounterButton({by, increment, decrement}){

    

 
    return(
        <>
      
        <div>
            <button className="CounterButton" onClick={() => increment(by)}>+{by}</button>
            <button className="CounterButton" onClick={() => decrement(by)}>-{by}</button>
        </div>
      

        </>
       
    )
}

function ResetButton({resetFunction}){
    return(
        <div>
            <button className="resetBtn CounterButton" onClick={() => resetFunction()}>RESET</button>
        </div>

    )
}
