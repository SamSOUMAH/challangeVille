 import { useState, useEffect} from "react";

 const FunctComp = () => {
     const [Compteur, setCompteur] = useState(500)

     useEffect(()=>{
        console.log('JE SUIS componentDidMount')
        return()=>console.log('j\'ai fini')},
        
        [])

     useEffect(()=>{if(Compteur!=0)console.log('Je change le state')})

    return (
        <div>
            {Compteur}
            <button onClick={()=>setCompteur(Compteur+500)}>Add</button>
        </div>
    )
}
export default FunctComp;


