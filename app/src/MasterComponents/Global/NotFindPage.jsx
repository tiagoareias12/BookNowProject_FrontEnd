import React, { Component } from 'react';
import NotFound from '../../Components/Global/404Page';
import Header from '../../Components/Global/Header';
import Footer from '../../Components/Global/Footer';

class NotFoundPage extends Component {
    render() {
      return (
        <div>
          <Header/>
          <NotFound/>
          <Footer/>
        </div>
      );
    }
  }

export default NotFoundPage;