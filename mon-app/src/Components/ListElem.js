import React from 'react'
import ListUnElem from './ListUnElem'

 const ListElem = ({mesFilms,suppElem}) => {
    return (
        <div>
           <ul>
               {mesFilms.map((Film)=>(
                    <ListUnElem 
                    key={Film.id}
                    nom={Film.nom}
                    id={Film.id}
                    suppElem={suppElem}
                    />
               ))}
           </ul>

        </div>
    )
}
export default ListElem;