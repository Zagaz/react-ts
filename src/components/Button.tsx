import React from "react";

interface ButtonProps {
     value: string;
     style: string;
}

function debug(): void {
     console.log("Button clicked");
}

const Button: React.FC<ButtonProps> = ({ value, style }) => {
     return (
          <>
               <button className={`button-style-${style}`} onClick={() => debug()}> {value} </button>
          </>
     );
}

export default Button;


