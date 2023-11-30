import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import IndexPage from '../src/MasterComponents/IndexPage';
import LoginPage from '../src/MasterComponents/Users/LoginPage';
import RegisterPage from './MasterComponents/Users/RegisterPage';
import NotFindPage from './Components/Global/404Page';
import EmailVerificationPage from './MasterComponents/Users/EmailVerificationPage';

var isAuthenticated = false; 
if(sessionStorage.getItem('isAutenticated') == null) {
    isAuthenticated = true;

  ReactDOM.render(
    <BrowserRouter>
        <Switch>
                {/*GLOBAIS*/}
                <Route path="/" exact={true} component={IndexPage} />
                {/*UTILIZADORES*/}
                <Route path="/login" component={LoginPage} />
                <Route path="/register" exact={true} component={RegisterPage} />
                <Route path="/register/confirm" exact={true} component={EmailVerificationPage} />~
                <Route path="/home" component={IndexPage} />
                <Route path='*' component={NotFindPage} /> 

        </Switch>
    </ BrowserRouter>
    , document.getElementById('root')
);
}
else{
    ReactDOM.render(
        <BrowserRouter>
            <Switch>
                {/*GLOBAIS*/}
                <Route path="/" exact={true} component={IndexPage} />
                {/*UTILIZADORES*/}
                <Route path="/login" component={LoginPage} />
                <Route path="/register" exact={true} component={RegisterPage} />
                <Route path="/register/confirm" exact={true} component={EmailVerificationPage} />~
                <Route path="/home" component={IndexPage} />
                <Route path='*' component={NotFindPage} /> 
    
            </Switch>
        </ BrowserRouter>
        , document.getElementById('root')
    );
    }
serviceWorker.unregister();