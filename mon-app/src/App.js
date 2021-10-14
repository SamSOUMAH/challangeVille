import React from 'react'
import { useState } from 'react'
import ClassComp from './Components/ClassComp'

const App = () => {
  const [show, setShow] = useState(true)
  return (
    
    <div className="appDiv">
  
     {show === true ? <ClassComp/> : null}
      <button onClick={()=>setShow(!show)}>  {show===true ? 'Supprimer ':'créer'}component</button>
    </div>
  )
}

export default App
