import React from 'react'
// import '../index.css'
import '../index.css'


type thumbProps = {
     src: string
     alt?: string
     aspect?: "square" | "portrait" | "landscape"
}

const Thumb: React.FC<thumbProps> = ({ src, alt, aspect }) => {
     return (
          <img src={src} alt={alt} className={`thumb thumb-aspect-${aspect}`} />
     )
}

export default Thumb
