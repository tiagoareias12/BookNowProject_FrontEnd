import React, { Component } from 'react';
import Index from '../Components/Index';
import Header from '../Components/Global/Header';
import Footer from '../Components/Global/Footer';

class IndexPage extends Component {
    render() {
      return (
        <div>
          <Header/>
          <Index/>
          <Footer/>
        </div>
      );
    }
  }

export default IndexPage;