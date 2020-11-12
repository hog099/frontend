import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import RoutesPrivates from './routesprivates';

import Login from '../pages/auth/index';
import Home from '../pages/home/index';
import Profile from '../pages/profile/index';
import Conversor from '../pages/conversor/index';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <RoutesPrivates path="/home" exact component={Home} />
                <RoutesPrivates path="/profile" exact component={Profile} />
                <RoutesPrivates path="/conversor" exact component={Conversor} />

                {/* <RoutesPrivates path="/home" exact component={props => <ClientLayout><Home {...props} /></ClientLayout>} /> */}
                {/* <RoutesPrivates path="/nopermission" exact component={NoPermission} />  */}

                <Redirect from='*' to='/' />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;