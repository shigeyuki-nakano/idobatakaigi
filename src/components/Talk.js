import React from 'react';
import { useHistory } from 'react-router-dom';
import config from '../config.json';
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';
import { MsgField } from './MsgField';
import { MsgFieldList } from './MsgFieldList';

const useStyles = makeStyles({
    root: {
        display: 'grid',
        height: '100vh',
        gridTemplateRows: '1fr auto'
    }
})
export const Talk = (props) => {
    const {name} = props;
    const [string, setString] = React.useState('');
    const [talk, setTalk] = React.useState('');
    const [dammy, setDammy] = React.useState([{name: '', talk: ''}]);
    const history = useHistory();
    const classes = useStyles();

    React.useEffect(() => {
        if(name === "" && ! config.signInEnable) {
            history.push('/');
        }
    }, [])

    React.useEffect(() => {
        if(talk !== "") {
            setDammy([...dammy, {name: name, talk: talk}]);
            setString("");
            // talkの更新を受け取りたいためtalkも空にする
            setTalk("");
        }
    }, [talk]);
    return (
        <div className={classes.root}>
            <MsgFieldList>
                {dammy.map((d, i) => (
                    <MsgField key={i}>
                        {i !== 0 && (
                                <div>
                                    {d.name}
                                    {d.talk}
                                </div>
                            )
                        }
                    </MsgField>
                ))}
            </MsgFieldList>
            <input
                type="text"
                onChange={(e) => setString(e.target.value)}
                value={string}
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