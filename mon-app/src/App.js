import React from 'react'
import { useState } from 'react'
import FunctComp from './FunctComp'

const App = () => {
  const [show, setShow]=useState(true)

  return (
    <div className="appDiv">
     {show===true?<FunctComp />:null}
     <button className="bouton" onClick={()=>setShow(!show)}> {show===true? <button className="bout">X</button> : <button className="Acheter">Acheter</button>}</button> 
    </div>
  )
}

export default App
