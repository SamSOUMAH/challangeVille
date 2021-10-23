import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Button  from 'react-bootstrap/Button';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';



 const MovieDetailePage = ({match}) => {
  
    useEffect(()=>{console.log(match.params.id)})

    return (
        <div>
            je suis MovieDetailePage<hr/>
           <Link to={"/"} ><Button><i className="fas fa-undo"></i></Button></Link>
        </div>
    )
}
export default MovieDetailePage;
