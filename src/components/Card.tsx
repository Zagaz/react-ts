import React from 'react'
import Thumb from './Thumb'


interface CardProps {
     id?: number
     name?: string
     title?: string
     body?: string
     mail?: string
     url?: string
     aspect?: 'square' | 'landscape' | 'portrait'
}
const Card: React.FC<CardProps> = ({ id, name, title, body, mail, url }) => {
     // temp string aspect 
     var aspectString: string = "square";
     return (
          <>
               <div className={`card id-card-${id}`}>
                    {url && <Thumb src={url} alt={name} aspect="landscape" />}
                    {name && <h1>{`${name}`}</h1>}
                    {title && <h1>{`${title}`}</h1>}
                    {body && <p>{`${body}`}</p>}
                    {mail && <p>{`Mail: ${mail}`}</p>}
               </div>
          </>
     )
}
export default Card