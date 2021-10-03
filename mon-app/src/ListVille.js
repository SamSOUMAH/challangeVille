
import Ville from './Ville'


 const ListVille=({villes, SupVille})=>{
    

    return (
        <div >
       <ul className="d-flex  justify-content-center">

        {villes.map((v)=>(

           <Ville
           key={v.id}
           id={v.id}
           nom={v.nom}
           photo={v.photo} 
           SupVille={SupVille}
           />     
        ))}
       </ul>
        </div>
    )
}

export default ListVille;