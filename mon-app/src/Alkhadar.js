import './App.css'
import { useState, useEffect} from "react";



 const Alkhadar = () => {
    const [Compteur, setCompteur] = useState(0)

    useEffect(()=>{
        console.log('JE SUIS componentDidMount')
        return()=>console.log('j\'ai fini, je quitte ')
    },[])

    useEffect(()=>{
       if(Compteur!==0) console.log('je suis componentDidUpdate')
    })

    return (
        <div className="divA">
            {Compteur}
            <div>
            <button onClick={()=>setCompteur(Compteur+500)}>ADD</button>
            </div>  
        </div>
    )
}
export default Alkhadar;


