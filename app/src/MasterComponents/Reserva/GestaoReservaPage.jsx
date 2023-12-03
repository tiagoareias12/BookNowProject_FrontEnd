import React, { Component } from 'react';
import GestaoReserva from '../../Components/Reserva/GestaoReserva';
import Footer from '../../Components/Global/Footer';
import Header from '../../Components/Global/Header';

import { Helmet } from 'react-helmet'

const TITLE = 'Autenticação'

class GestaoReservaPage extends Component {
    render() {
      return (
        
        <div>
          <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <Header/>
          <GestaoReserva/>
        <Footer/>
        </div>
      );
    }
  }

export default GestaoReservaPage;