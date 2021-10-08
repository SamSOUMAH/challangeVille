import React from 'react'
import { useState, useRef } from 'react'
import ListeTitre from './ListeTitre'
import AjouElem from './AjouElem'



const App = () => {
  const [Lestitres, setLestitres] = useState([{id:1, titre:"Bonjour"}, {id:2, titre:"Salut"}, {id:3, titre:"Nuit"}])
  const suppElement=(idTite)=>{
    if (window.confirm("VOULEZ VOUS SUPPRIMER?")===false) return 

    let nouvellle=[...Lestitres]
    nouvellle=nouvellle.filter((t)=>t.id!=idTite)
    setLestitres([...nouvellle])
  } 


  return (
    <div>
      <AjouElem />
      
 <ListeTitre
  Lestitres={Lestitres}
  suppElem={suppElement}
 />
    </div>
  )
}

export default App
