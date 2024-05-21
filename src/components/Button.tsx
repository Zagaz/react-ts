import React from "react";
import { useState } from "react";

const [buttonStyle, setButtonStyle] = useState<string>("light");

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
               <button className={`button-${buttonStyle}`} onClick={() => debug()}> {value} </button>
          </>
     );
}

export default Button;


