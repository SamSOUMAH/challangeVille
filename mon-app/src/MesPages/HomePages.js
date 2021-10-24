import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { movie } from '../models/Movie';
import { Link } from 'react-router-dom';

 const MovieItems=({m})=>
 <div>
  <h2>{m.title}</h2>
 <Link to={"/movie-Detail/"+m.id}>Moore Detail</Link>
 </div>

 const HomePages = () => {

const [Movie, setMovie]=useState([
 new movie(1, "Alkaly"),
 new movie(2, "SOUMAH"),
 new movie(3, "SAM")
])


    return (       
        <div>
            {
                Movie.map(m=>
                    <MovieItems
                    key={m.id}
                    m={m}
                    />
                    )
            
            }
        </div>
    )
}
export default HomePages;