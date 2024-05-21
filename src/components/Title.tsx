import React from 'react'
import { Interface } from 'readline'

interface titleInterface{
     title: string
}

const Title: React.FC<titleInterface> = ({title}) => {
     return (
          <h1>{title}</h1>
     )
}

export default Title

