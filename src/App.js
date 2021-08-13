import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Homepage from './pages/homepage/homepage.component';

const HatsPage = () =>{
  return( 
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch> {/* if one route matches then it will render the first one that matched so you don't need the exact*/}
        <Route exact={true} path='/' component={Homepage} />
        <Route exact={true} path='/hats' component={HatsPage} />
      </Switch>
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
