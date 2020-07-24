import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// PAGES
import { SignIn } from './pages';

 const AuthRouter: React.FC = () => {

    return(
        <Router>
            <Switch>
                <Route path='/auth' component={SignIn} />
            </Switch>
        </Router>
    )

}

export default AuthRouter;