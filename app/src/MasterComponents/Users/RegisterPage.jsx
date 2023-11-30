import React, { Component } from 'react';
import Register from '../../Components/Users/Register';
import Footer from '../../Components/Global/Footer';
class RegisterPage extends Component {
    render() {
      return (
        <div>
          <Register/>
          <Footer/>
        </div>
      );
    }
  }

export default RegisterPage;