import React from 'react'
import { useRef } from 'react';

 const AddMovie = ({Ajoute}) => {
   const inputRef=useRef("")
   
   const Ajout=()=>{
     let inputValue=inputRef.current.value;
     inputRef.current.value=""
     Ajoute(inputValue)

   }


  return (
    <div>
      <input type="text" ref={inputRef}></input>
      <button onClick={()=>Ajout()} className="boutton">+</button>
    </div>
  )
}
export default AddMovie;
