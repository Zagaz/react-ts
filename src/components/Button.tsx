import React from "react";
import './Button.css'


interface ButtonProps {
     value: string;
     style?: "success" | "danger"
}

function debug(): void {
     console.log("Button clicked");
}

const Button: React.FC<ButtonProps> = ({ value, style }) => {
     return (
          <>
          <button className={
               `button-style-${
                    //Default style is success
                    style ? style : "success"
               }`
      
          }>
               {value}

          </button>
          
          </>
     );
}

export default Button;


