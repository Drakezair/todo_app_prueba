import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// PAGES
import { Home } from './pages';


const WorkPlaceRouter: React.FC = () => {


    return (
        <Router>
            <Switch>
                <Route path='/' component={Home} />
            </Switch>
        </Router>
    )
}

export default WorkPlaceRouter;