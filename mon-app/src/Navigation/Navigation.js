import React from 'react'
import AppRouter from '../Routers/AppRouter';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Button  from 'react-bootstrap/Button';


 const Navigation = () => {
     const [show, setShow] = useState(null)
    
    return (

        <div>
      <ul style={{display:'flex', backgroundColor:'black'}}>
         <Link to="/">
            <li style={{listStyle:'none', color:'yellow'}}>
             {show===true?<AppRouter/>:null}
             <Button variant="dark" className="border" onClick={()=>setShow(!show)}>{show===true?<Button variant="danger" className="border">x</Button>:<i className="fas fa-bars"></i>}</Button>   
             </li>
        </Link>
         

          <Link to="/Acceuil">
          <li style={{marginLeft:20, listStyle:'none', color:'yellow'}}>Acceuil</li>
          </Link>
          
          <Link to="/Contacts">
          <li style={{marginLeft: 20, listStyle:'none', color:'white'}}>Contacts</li>
          </Link>

          <Link to="/Projet">
          <li style={{marginLeft: 20, listStyle:'none', color:'white'}}>Projet</li>   
          </Link>

      </ul>
        </div>
    )
}
export default Navigation;
