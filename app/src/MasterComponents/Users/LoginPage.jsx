import React, { Component } from 'react';
import Login from '../../Components/Users/Login';
import Footer from '../../Components/Global/Footer';
import { Helmet } from 'react-helmet'

const TITLE = 'Autenticação'

class LoginPage extends Component {
    render() {
      return (
        
        <div>
          <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
          <Login/>
        <Footer/>
        </div>
      );
    }
  }

export default LoginPage;