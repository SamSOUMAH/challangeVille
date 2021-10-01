import React, { useState } from 'react'
import Ville from './Ville'


export const ListVille=()=>{
    const [villes, setvilles] = useState([{id: 1, nom:"CASABLANCA", photo:"./casablanca.jpg"}, {id:2,nom:"RABAT", photo:"./Rabat.jpg"}])
     
   
    return (
        <div >
       <ul className="d-flex  justify-content-center">

        {villes.map((v)=>(

           <Ville
           nom={v.nom}
           photo={v.photo} 
           key={v.id}
           id={v.id}
           OnDelete={(id)=>alert(id)}
           />
        
        ))}
       </ul>
        </div>
    )
}
