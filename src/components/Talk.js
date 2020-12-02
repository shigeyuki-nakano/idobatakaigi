import React from 'react';
import { useHistory } from 'react-router-dom';
import config from '../config.json';
import { makeStyles } from '@material-ui/core/styles'
import { IconButton } from '@material-ui/core';
import TelegramIcon from '@material-ui/icons/Telegram';
import { Grid } from '@material-ui/core';
import { MsgField } from './MsgField';
import { MsgFieldList } from './MsgFieldList';
import { Input } from './Input';

import { pushMessage } from '../.firebase-config';


const useStyles = makeStyles({
    root: {
        display: 'grid',
        height: '90vh',
        gridTemplateRows: '1fr auto'
    }
})
export const Talk = (props) => {
    const {name} = props;
    const [talk, setTalk] = React.useState('');
    const history = useHistory();
    const classes = useStyles();
    const inputEl = React.useRef(null);

    React.useEffect(() => {
        if(name === "" && ! config.signInEnable) {
            history.push('/');
        }
    }, [])
    
    React.useEffect(() => {
        console.log(inputEl);
    })

    const registerTalk = () => {
        pushMessage({name: name, text: talk});
        // talkの更新を受け取りたいためtalkも空にする
        setTalk("");
    }

    return (
        <div className={classes.root}>
            <MsgFieldList/>
            <Input
                inputRef={inputEl}
                autoFocus
                onKeyDown={(e) => {
                    if(e.key === 'Enter' && talk !== ""){
                        e.preventDefault();
                        registerTalk();
                    }
                }}
                text={talk}
                setText={(e) => setTalk(e.target.value)}
            />
            <IconButton
                disabled={talk === ""}
                onClick={() => {
                    registerTalk();
                    inputEl.current.focus()
                }}>
                <TelegramIcon/>
            </IconButton>
        </div>
    )
}