import React from 'react'

 const ListUnElem = ({nom, id , suppElem}) => {
    return (
        <div className="listDiv">
            <li>
                <span>{nom}</span>
                <button onClick={()=>suppElem(id)} className="supp"> Supp.X</button>
                
            </li>
        </div>
    )
}

export default ListUnElem