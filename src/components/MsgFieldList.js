import React from 'react';
import { MsgField } from './MsgField';
import { messagesRef } from '../.firebase-config';

export const MsgFieldList = () => {
    const [messages, setMessages] = React.useState([]);

    React.useEffect(() => {
        messagesRef
        .orderByKey()
        .limitToLast(5)
        .on('value', (data) => {
            const messages = data.val();
            if(messages){
                const entries = Object.entries(messages);
        
                const newMessages = entries.map((entry) => {
                    const [key, nameAndText] = entry
                    return {key: key, ...nameAndText}
                })
                setMessages(newMessages);
            }
        })
    }, []);
    return (
        <div>
            {messages.map((message) => (
                <MsgField
                    key={message.key}
                    name={message.name}
                    msg={message.text}
                />
            ))}
        </div>
    )
}