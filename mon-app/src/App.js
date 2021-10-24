import React from 'react'
import Acceuil from './Navigation/Acceuil'
import Contacts from './Navigation/Contacts'
import Projet from './Navigation/Projet'
import Navigation from './Navigation/Navigation'
import { BrowserRouter, Route } from 'react-router-dom'
import AppRouter from './Routers/AppRouter'

const App = () => {

  return (
    <div >
     <BrowserRouter>
     <Route>
        
       <Navigation/>
      
       <Route path="/AppRouter" exact component={AppRouter}/>
      <Route path="/Acceuil" exact component={Acceuil}/>
      <Route path="/Contacts" exact component={Contacts}/>
      <Route path="/Projet" exact component={Projet}/>
     </Route>
     </BrowserRouter>
  
     
    </div>
  )
}

 export default App
