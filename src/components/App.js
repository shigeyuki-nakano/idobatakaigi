import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { SignInSide } from './SignIn';
import { Talk } from './Talk';

export default () => {
  const [name, setName] = useState('');
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignInSide
            setName={setName}
          />
        </Route>
        <Route exact path="/talk">
          <Talk name={name}/>
        </Route>
      </Switch>
    </Router>
  )
};
