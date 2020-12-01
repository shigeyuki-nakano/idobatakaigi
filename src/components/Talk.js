import React from 'react';
import { useHistory } from 'react-router-dom';
import config from '../config.json';
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';
import { MsgField } from './MsgField';
import { MsgFieldList } from './MsgFieldList';
import { Input } from './Input';

import { pushMessage } from '../.firebase-config';


const useStyles = makeStyles({
    root: {
        display: 'grid',
        height: '100vh',
        gridTemplateRows: '1fr auto'
    }
})
export const Talk = (props) => {
    const {name} = props;
    const [talk, setTalk] = React.useState('');
    const history = useHistory();
    const classes = useStyles();

    React.useEffect(() => {
        if(name === "" && ! config.signInEnable) {
            history.push('/');
        }
    }, [])

    React.useEffect(() => {
        if(talk !== "") {
            pushMessage({name: name, text: talk});
            // talkの更新を受け取りたいためtalkも空にする
            setTalk("");
        }
    }, [talk]);
    return (
        <div className={classes.root}>
            <MsgFieldList>
                {/* {dammy.map((d, i) => (
                    <MsgField
                        key={i}
                        name={d.name}
                        msg={d.talk}
                    />
                ))} */}
            </MsgFieldList>
            <Input
                onKeyDown={(e) => {
                    if(e.key === 'Enter' && e.target.value !== ""){
                        e.preventDefault();
                        setTalk(e.target.value);
                    }
                }} 
            />
        </div>
    )
}