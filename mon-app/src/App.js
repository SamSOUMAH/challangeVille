
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ListVille from './ListVille';

function App() {
  const [villes, setVilles] = useState([{id:1, nom:"TANGER", photo:"./Tanger.jpg"}, {id:2, nom:"CASABLANCA", photo:"./casablanca.jpg"}, {id:3,nom:"RABAT", photo:"./Rabat.jpg"}])
  
   const SupVilleById=(idVille)=>{
     
   let NouVille = [...villes];
   NouVille = NouVille.filter((_, id) =>id != idVille);
  setVilles([...NouVille]);

  }

 
  return (
    <div className="App">
      <h1 className="d-flex justify-content-center">VILLES DU MAROC</h1>
    
      <ListVille 
      villes={villes}
      SupVille={SupVilleById}
     
      />
    </div>
  );
}

export default App;
