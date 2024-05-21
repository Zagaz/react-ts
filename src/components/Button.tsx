import React from "react";
import './Button.css'


interface ButtonProps {
     value: string;
     style?: "success" | "danger";
     onClick: () => void;
}


const Button: React.FC<ButtonProps> = ({value, style, onClick}) => {
    return (
        <button className={`button ${style}`} onClick={onClick}>{value}</button>
    )
}

export default Button;

