import React from 'react'


interface thumbProps{
     src : string
     alt ?: string
     style ?: "square" | "portrait" | "landscape" 


}

const Thumb: React.FC<thumbProps> = ({ src, alt, style }) => {
     return (
          <img className={`thumb-style-${!style ? "portrait" : style}`} 
          src={src} alt={alt}/>
     )
}

export default Thumb
