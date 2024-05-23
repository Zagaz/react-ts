import React from 'react'

interface ButtonProps{
     style?: "success" | "danger" | "warning" | "info" | "black" | "white" | "grey"
     onClick: () => string | void;
     children : React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ style, onClick , children}) => {
     return (
         <button className={`button-style-${!style ? "grey" : style}`} 
         onClick={onClick}>{children}</button>
     )
 }
 export default Button;





