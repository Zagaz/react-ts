import React, { MouseEventHandler } from 'react';

type ButtonProps = {
    style?: "success" | "danger" | "warning" | "info" | "black" | "white" | "grey";
    onClick: MouseEventHandler;
    children: React.ReactNode;
}

export const Button  = ({ style, onClick, children }:ButtonProps) => {
    return (
        <button className={`button-style-${!style ? "grey" : style}`}
            onClick={onClick}>{children}</button>
    )
}






