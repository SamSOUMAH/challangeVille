import React from 'react'
import HomePages from '../MesPages/HomePages';
import MovieDetailePage from '../MesPages/MovieDetaile';
import { BrowserRouter, Route, Switch} from 'react-router-dom'



const AppRouter = () => {

    return (
        <div> 
            
            <BrowserRouter>
         <Switch>
                      <Route  path="/" exact component={HomePages}/> 
                      <Route path="/movie-Detail/:id" component={MovieDetailePage}/>
                      <Route path="**" render={()=><h3>Erreur d'Ouverture 404</h3>}/>    
         </Switch>
                       
           </BrowserRouter>
        </div>
    )
}
export default AppRouter;