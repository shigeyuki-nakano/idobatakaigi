import React from 'react';

export const MsgField = ({name, msg, isLastItem}) => {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if(isLastItem) {
            ref.current.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, [isLastItem])
    return (
        <div ref={(div) => ref.current = div} style={{border: "1px solid black", marginBottom: "5px", padding: "5px"}}>
            <div style={{borderBottom: "1px solid black", display: "inline"}}>{name}</div>
            <div>{msg}</div>
        </div>
    )
}