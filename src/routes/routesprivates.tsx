import React, {useState} from 'react';
import {Route, Redirect} from 'react-router-dom';
// import {userIsLogged} from './pages/auth/authActions'

export interface RouteProps {
  component: React.ComponentType<any>;
  path: string | string[];
  exact: boolean;
}

const RoutesPrivate: React.FC<RouteProps> = (props) => {

    const [useislogged] = useState(localStorage.getItem('user') || '');


    // return <div />;
//   return userIsLogged() ? <Route {...props} /> : <Redirect to="/login" />;
  return useislogged ? <Route {...props} /> : <Redirect to="/login" />;
}

export default RoutesPrivate;