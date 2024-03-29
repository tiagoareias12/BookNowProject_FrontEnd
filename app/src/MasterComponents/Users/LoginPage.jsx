import React, { Component } from 'react';
import Login from '../../Components/Users/Login';
import Footer from '../../Components/Global/Footer';
import Header from '../../Components/Global/Header';

import { Helmet } from 'react-helmet'

const TITLE = 'Autenticação'

class LoginPage extends Component {
    render() {
      return (
        
        <div>
          <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <Header/>
          <Login/>
        <Footer/>
        </div>
      );
    }
  }

export default LoginPage;