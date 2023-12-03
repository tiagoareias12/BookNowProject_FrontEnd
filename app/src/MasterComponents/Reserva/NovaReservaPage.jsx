import React, { Component } from 'react';
import NovaReserva from '../../Components/Reserva/NovaReserva';
import Footer from '../../Components/Global/Footer';
import Header from '../../Components/Global/Header';

import { Helmet } from 'react-helmet'

const TITLE = 'Autenticação'

class NovaReservaPage extends Component {
    render() {
      return (
        
        <div>
          <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <Header/>
          <NovaReserva/>
        <Footer/>
        </div>
      );
    }
  }

export default NovaReservaPage;