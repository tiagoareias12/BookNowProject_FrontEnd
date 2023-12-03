import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import IndexPage from '../src/MasterComponents/IndexPage';
import LoginPage from '../src/MasterComponents/Users/LoginPage';
import ProfilePage from '../src/MasterComponents/Users/ProfilePage';
import RegisterPage from './MasterComponents/Users/RegisterPage';
import NovaReservaPage from './MasterComponents/Reserva/NovaReservaPage';

import NotFindPage from './MasterComponents/Global/NotFindPage';
import EmailVerificationPage from './MasterComponents/Users/EmailVerificationPage';
import GestaoReservaPage from './MasterComponents/Reserva/GestaoReservaPage';

var jwt = require('jose');

var isAutenticated;
var isAdmin;

if (sessionStorage.getItem('isAutenticated') == null){

  isAutenticated = false;
}
else{
  var token = jwt.decodeJwt(sessionStorage.getItem('token'));
  if(token.isAdmin == false){
    isAdmin = false;
    isAutenticated = true;
  }
  else{
    isAdmin = true;
    isAutenticated = true;
  }
}

//ROUTES DISPONIVEIS PARA UTILIZADORES NÃO AUTENTICADOS
if(isAutenticated == false) {

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
//ROUTES DISPONIVEIS PARA UTILIZADORES AUTENTICADOS
else{
    if(isAdmin == false){
    //ROUTES DISPONIVEIS PARA UTILIZADORES NORMAIS (CLIENTES)
    ReactDOM.render(
        <BrowserRouter>
            <Switch>
                {/*GLOBAIS*/}
                <Route path="/" exact={true} component={IndexPage} />
                {/*UTILIZADORES*/}
                <Route path="/login" component={LoginPage} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/register" exact={true} component={RegisterPage} />
                <Route path="/register/confirm" exact={true} component={EmailVerificationPage} />~
                <Route path="/home" component={IndexPage} />
                <Route path="/reserva/new" component={NovaReservaPage} />
                <Route path='*' component={NotFindPage} /> 
    
            </Switch>
        </ BrowserRouter>
        , document.getElementById('root')
    );
    }
        //ROUTES DISPONIVEIS PARA UTILIZADORES ADMIN (ADMINISTRADORES)
        if(isAdmin == true){
        ReactDOM.render(
            <BrowserRouter>
                <Switch>
                    {/*GLOBAIS*/}
                    <Route path="/" exact={true} component={IndexPage} />
                    {/*UTILIZADORES*/}
                    <Route path="/login" component={LoginPage} />
                    <Route path="/profile" component={ProfilePage} />
                    <Route path="/register" exact={true} component={RegisterPage} />
                    <Route path="/register/confirm" exact={true} component={EmailVerificationPage} />~
                    <Route path="/home" component={IndexPage} />
                    <Route path="/reserva/new" component={NovaReservaPage} />
                    <Route path="/reserva/gestao" component={GestaoReservaPage} />
                    <Route path='*' component={NotFindPage} /> 
        
                </Switch>
            </ BrowserRouter>
            , document.getElementById('root')
        );
        }
    
    }
serviceWorker.unregister();