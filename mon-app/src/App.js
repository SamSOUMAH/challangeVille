import React from 'react'
import { useState } from 'react'
import Alkhadar from './Alkhadar'

const App = () => {
  const [show, setShow]=useState(true)

  return (
    <div className="appDiv">
      
     {show===true?<Alkhadar />:null}
     <div>
     <button className="bouton" onClick={()=>setShow(!show)}> {show===true? <button className="bout">X</button> : <button className="Acheter">Acheter</button>}</button> 
     </div>
    </div>
  )
}

export default App
