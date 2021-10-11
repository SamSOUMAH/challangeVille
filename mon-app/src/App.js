import React from 'react'
import AddMovie from './Components/AddMovie'
import ListElem  from './Components/ListElem'
import { useState, useRef} from 'react'
import './App.css'

const App = () => {
  const [mesFilms, setMesFilms]=useState([{id:1,nom:"musa"}, {id:2, nom:"prison brique"}, {id:3, nom:"chrono 24"}])
  const [mesFilmsCopie, setMesFilmsCopie]=useState([{id:1,nom:"musa"}, {id:2, nom:"prison brique"}, {id:3, nom:"chrono 24"}])
  
  const DeleteFilm=(iid)=>{
    if(window.confirm('ETES VOUS SURS ?')===false)
    return
    let mesNouveau=[...mesFilms]
    mesNouveau=mesNouveau.filter((table) => table.id !== iid)
    setMesFilms([...mesNouveau])
    setMesFilmsCopie([...mesNouveau])
  }

  const AjoutFilm=(ValSaisi)=>{
    if(ValSaisi==="") if(window.confirm('VOULEZ VOUS AJOUTER UN DOSSIER VIDE ?')===false) return
    let filmAjouter=[...mesFilms,{id:mesFilms.length+1, nom:ValSaisi}]
    setMesFilms([...filmAjouter])
    setMesFilmsCopie([...filmAjouter])
  }

 const refInputValue=useRef("") 
  const filterFunction=()=>{
    let inputValue=refInputValue.current.value.toLowerCase();
    if(inputValue==="")setMesFilms([...mesFilmsCopie])
    else {
    let NewTable=[...mesFilms]
    NewTable=NewTable.filter((leFilm)=>leFilm.nom.toLowerCase().includes(inputValue))
    setMesFilms([...NewTable])
  }
  }

  return (
    
    <div className="appDiv">
      <div className="headInput">
      <AddMovie 
       Ajoute={AjoutFilm}
      />
      </div>
    
     <header className="headInput">
       <input 
       type="text" 
       placeholder="Search..."
       onKeyUp={filterFunction}
       ref={refInputValue}
        ></input>
     </header>
 
     <ListElem
     mesFilms={mesFilms}
     suppElem={DeleteFilm}
     />
    </div>
  )
}

export default App
