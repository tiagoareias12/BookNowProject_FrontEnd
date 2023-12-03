import React, { Component } from 'react';
import Profile from '../../Components/Users/Profile';
import Footer from '../../Components/Global/Footer';
import Header from '../../Components/Global/Header';

import { Helmet } from 'react-helmet'

const TITLE = 'Autenticação'

class ProfilePage extends Component {
    render() {
      return (
        
        <div>
          <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <Header/>
          <Profile/>
        <Footer/>
        </div>
      );
    }
  }

export default ProfilePage;