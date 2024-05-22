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
               <div className={`id-card-${id}`}>
              
                    {name && <h2>{`Name: ${name}`}</h2>}
                    {title && <h2>{`Title: ${title}`}</h2>}
                    {body && <p>{`Body: ${body}`}</p>}
                    {mail && <p>{`Mail: ${mail}`}</p>}
                    <br />
               </div>
               <hr />
               <br />
          </>
     )
}

export default Card