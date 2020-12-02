import React from 'react';
import { MsgField } from './MsgField';
import { messagesRef } from '../.firebase-config';

export const MsgFieldList = () => {
    const [messages, setMessages] = React.useState([]);
    const [messagesLength, setMessagesLength] = React.useState(0);

    React.useEffect(() => {
        messagesRef
        .orderByKey()
        // .limitToLast(5)
        .on('value', (data) => {
            const messages = data.val();
            if(messages === null) {return};

            const entries = Object.entries(messages);
    
            const newMessages = entries.map((entry) => {
                const [key, nameAndText] = entry
                return {key: key, ...nameAndText}
            })
            setMessages(newMessages);
        })
    }, []);

    React.useEffect(() => {
        setMessagesLength(messages.length);
    }, [messages])
    return (
        <div>
            {messages.map((message, i) => (
                <MsgField
                    key={message.key}
                    name={message.name}
                    msg={message.text}
                    isLastItem={messagesLength === i}
                />
            ))}
        </div>
    )
}