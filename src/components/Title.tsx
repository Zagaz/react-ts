import React from 'react'


interface titleProps {
     title: string
     gender?: string
     age?: number
}

const Title: React.FC<titleProps> = ({ title, gender, age }) => {
     return (
          <>
               <h1>
                    {`
              ${title && title ? title : "No title"}
              ${gender && gender}
              ${age && age} 
              `}
               </h1>
          </>

     )
}

export default Title

