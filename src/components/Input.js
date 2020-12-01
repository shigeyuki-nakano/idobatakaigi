import React from 'react';

export const Input = (props) => {
    const [text, setText] = React.useState('');
    const {onKeyDown} = props;

    return (
        <input
            type="text"
            onKeyDown={(e) => {
                onKeyDown(e);
                if(e.key === 'Enter' && e.target.value !== "") {
                    e.preventDefault();
                    setText("");
                }
            }}
            onChange={(e) => setText(e.target.value)}
            value={text}
        />
    )
}