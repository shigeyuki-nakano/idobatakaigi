import React from 'react';

export const Input = ({onKeyDown, setText, text, autoFocus, inputRef}) => {

    return (
        <input
            ref={(input) => inputRef.current = input}
            autoFocus={autoFocus}
            type="text"
            onKeyDown={onKeyDown}
            onChange={setText}
            value={text}
        />
    )
}