import React, { Component } from 'react';
import Register from '../../Components/Users/Register';
import Footer from '../../Components/Global/Footer';
import Header from '../../Components/Global/Header';
class RegisterPage extends Component {
    render() {
      return (
        <div>
          <Header/>
          <Register/>
          <Footer/>
        </div>
      );
    }
  }

export default RegisterPage;