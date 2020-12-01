import React from 'react';

export const MsgField = (props) => {
    const {name, msg} = props
    return (
        <div style={{border: "1px solid black", marginBottom: "5px", padding: "5px"}}>
            <div style={{borderBottom: "1px solid black", display: "inline"}}>{name}</div>
            <div>{msg}</div>
        </div>
    )
}