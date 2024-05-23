import React from 'react'


interface thumbProps{
     src : string
     alt ?: string
     style?: "success" | "danger" | "warning" | "info" | "black" | "white" | "grey"
     aspect ?: "square" | "portrait" | "landscape"


}

const Thumb: React.FC<thumbProps> = ({ src, alt, style, aspect }) => {
     return (
          <img className={`thumb-style-${!style ? "portrait" : style}`} 
          src={src} alt={alt}/>
     )
}

export default Thumb
