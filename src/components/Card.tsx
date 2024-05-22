import React from 'react'

interface CardProps {
     id?: number
     name?: string
     title?: string
     body?: string
     mail?: string

}

const Card: React.FC<CardProps> = ({ id, name, title, body, mail }) => {
     return (
          <>
               <div className={`card id-card-${id}`}>
              
                    {name && <h1>{`${name}`}</h1>}
                    {title && <h1>{`${title}`}</h1>}
                    {body && <p>{`${body}`}</p>}
                    {mail && <p>{`Mail: ${mail}`}</p>}
                    <br />
               </div>

               <br />
          </>
     )
}

export default Card