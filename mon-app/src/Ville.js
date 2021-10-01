import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';

 const Ville = ({id, nom, photo, OnDelete}) => {
    return (
       <li className="list-group-item border rounded-3 bg-success" >
        <Button 
        variant="light"
         onClick={()=>OnDelete(id)} 
         className="float-end"><i className="fas fa-trash-alt"></i></Button>
        <span>
        <h1 className="text-light">{nom}</h1>
        <img src={photo} width="400" height="320" className="rounded-3" alt=""/>
        </span>
       
    </li>
    )
}

export default Ville