import React from "react";
import {useState} from "react";

const [buttonStyle, setButtonStyle] = useState<string>("light");




interface ButtonProps {
     value: string;
     style : string;
}

function debug():void {
     console.log("Button clicked");
}

const Button: React.FC<ButtonProps> = ({ value  , style }) => {
     return (
          <>
          {
               style && value.length > 0 ? <h1> {value} </h1> : <h1> No value </h1>
          }
          <button className = {`button-${buttonStyle}`} onClick={() => debug()}> {value} </button>
          </>
     );
}

export default Button;


