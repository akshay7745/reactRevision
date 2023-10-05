import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(15); /* 0 (Zero) is initial value or default value of count variable */
// count is variable name and setCount is fuction and we can update the value of count through it
//! Why we are using useState ?
// ans Because if we want to update any variable value and reflect that change into UI then 
// we have to use useState hook if we take any other variable and try to update it and use it in jsx 
// then value of variable will get updated but that change we can't see in the UI because react takes control 
// of UI updation process .  



  return (
    <>
     
   
      <div className="card">
        <button disabled={ count>=20 } onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       <button disabled={count<=0} onClick={()=> setCount((count)=> count-1)}>Decrease</button>
      </div>
     
    </>
  )
}

export default App
