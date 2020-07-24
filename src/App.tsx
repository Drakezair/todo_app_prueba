import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import { Router, Route, Switch } from 'react-router-dom';
import history from "./Shared/utils/history";


// ROUTERS
import AuthRouter from './Auth';
import WorkPlaceRouter from './WorkPlace';

function App() {
  return (
    <Router history={history}  >
      <Switch>
        <Route path='/auth' component={AuthRouter}/>
        <Route path='/' component={WorkPlaceRouter}/>
      </Switch>
    </Router>
  );
}

export default App;
