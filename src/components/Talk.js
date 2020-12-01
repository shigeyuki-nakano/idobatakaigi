import React from 'react';
import { useHistory } from 'react-router-dom';
import config from '../config.json';

export const Talk = (props) => {
    const {name} = props;
    const [string, setString] = React.useState('');
    const [talk, setTalk] = React.useState('');
    const [dammy, setDammy] = React.useState([{name: '', talk: ''}]);
    const history = useHistory();

    React.useEffect(() => {
        if(name === "" && ! config.signInEnable) {
            history.push('/');
        }
    }, [])

    React.useEffect(() => {
        if(talk !== "") {
            setDammy([...dammy, {name: name, talk: talk}]);
            setTalk("");
        }
    }, [talk]);
    return (
        <>
            {dammy.map((d, i) => (
                <div key={i}>
                    {i !== 0 && (
                            <div>
                                {d.name}
                                {d.talk}
                            </div>
                        )
                    }
                </div>
            ))}
            <p>トーク場所{name}</p>
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
        </>
    )
}