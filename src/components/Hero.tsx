import React from 'react'
interface HeroProps {
     title: string,
     subtitle: string
}

const Hero:React.FC<HeroProps> = ({title, subtitle}) => {
     return (
          <div>
               <h1>{title}</h1>
               <p>{subtitle}</p>
          </div>
     )
}

export default Hero