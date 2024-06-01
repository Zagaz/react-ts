import React, { MouseEventHandler } from 'react';

type ButtonProps = {
    style?: "success" | "danger" | "warning" | "info" | "black" | "white" | "grey";
    onClick: MouseEventHandler;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ style, onClick, children }) => {
    return (
        <button className={`button-style-${!style ? "grey" : style}`}
            onClick={onClick}>{children}</button>
    )
}
export default Button;





