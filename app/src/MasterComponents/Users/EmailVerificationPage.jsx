import React, { Component } from 'react';
import EmailVerification from '../../Components/Users/EmailVerification';
import Footer from '../../Components/Global/Footer';
import { Helmet } from 'react-helmet'

const TITLE = 'Verificação de Email'

class EmailVerificationPage extends Component {
    render() {
      return (
        
        <div>
          <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
          <EmailVerification/>
        <Footer/>
        </div>
      );
    }
  }

export default EmailVerificationPage;