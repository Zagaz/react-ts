import React from 'react'

interface thumbProps{
     src : string
     alt ?: string
     style ?: string


}

const Thumb: React.FC<thumbProps> = ({ src, alt, style }) => {
     return (
         <img className={`thumb thumb-${style}`} src={src} alt={alt}/>
     )
}

export default Thumb
