import React from 'react'

interface titleProps {
     title: string
     gender?: "male" | "female" | "other"
     age?: number | string
}

const Title: React.FC<titleProps> = ({ title, gender, age }) => {
     return (
          <>
               <h1>{`${title && title ? title : "No title"}  `}  </h1>
               <h2>{`Gender: ${gender && gender} `}</h2>
               <h3>{`Age: ${age && age}`}</h3>

               
              

          </>

     )
}

export default Title

