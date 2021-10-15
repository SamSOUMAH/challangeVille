import React from 'react'
import { useState } from 'react'
import FunctComp from './FunctComp'

const App = () => {
  const [show, setShow]=useState(true)

  return (
    
    <div className="appDiv">
     {show===true? <FunctComp />:null}
     <button onClick={()=>setShow(!show)}> {show===true? <button>X</button> : <button>+</button>}</button>
     
    </div>
  )
}

export default App
