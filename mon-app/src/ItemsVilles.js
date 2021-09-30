import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';

export const ItemsVilles = () => {
    return (
        <div className="container-fluid d-flex justify-content-center" >
             <li className="list-group-item border ">
             <img src="./casablanca.jpg" width="400" alt=""></img>
            <h5>CASABLANCA</h5>
            <Button variant="danger"><i class="fas fa-trash-alt"></i></Button>
             
             </li>

             <li className="list-group-item border " >
             <img src="./Rabat.jpg" width="400" alt=""></img>
             <h5>RABAT</h5>
             <Button variant="danger"><i class="fas fa-trash-alt"></i></Button> 
             </li>
            
        </div>
    )
}
