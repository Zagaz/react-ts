import React from 'react'

interface titleProps {
     title: string
     gender?: "male" | "female" | "other"
     age?: number | string
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

