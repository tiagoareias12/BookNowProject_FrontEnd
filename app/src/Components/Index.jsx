import React, { Component } from "react";
// import AlertMsg from '../Global/AlertMsg';
// import LoadingGif from '../Global/LoadingGif';
// import 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'
import Hero from '../CssComponents/HomePage/sections/Hero';
import FeaturesTiles from '../CssComponents/HomePage/sections/FeaturesTiles';
import FeaturesSplit from '../CssComponents/HomePage/sections/FeaturesSplit';
import Testimonial from '../CssComponents/HomePage/sections/Testimonial';
import Cta from '../CssComponents/HomePage/sections/Cta';

import '../CssComponents/HomePage/css/index.css';
import '../CssComponents/HomePage/css/bootstrap.min.css';

import waves from '../CssComponents/HomePage/images/line-dec.png';
import image from '../CssComponents/HomePage/images/tennis.jpg';
import image2 from '../CssComponents/HomePage/images/padel.jpg';
import image3 from '../CssComponents/HomePage/images/futsal.jpg';
import image4 from '../CssComponents/HomePage/images/futebol.jpg';
import image5 from '../CssComponents/HomePage/images/restaurant.jpg';
import image6 from '../CssComponents/HomePage/images/outros.jpg';



class Index extends Component {

  constructor() {
    super();
    this.state = {
      alertText: "",
      alertisNotVisible: true,
      alertColor: "danger",
      dataGet: [],
      dataPost: [],
      isHidden: false
    }
  }

  componentDidMount () {
 
  
}
 


 

  render() {
    return (
      <div>
      <section class="section" id="features">
      <div class="container">
          <div id="containerIndexNoAuth" class="row">
              <div class="col-lg-6 offset-lg-3">
                  <div class="section-heading">
                  <h2>Serviços de  <em>Reservas</em></h2>
                      <img src={waves} alt="waves"></img>
                      <p>Reservas ? É aqui mesmo </p>

                  </div>
              </div>
              <div class="col-lg-6">
                  <ul class="features-items">
                      <li class="feature-item">
                          <div class="left-icon">
                              <img src={image} alt="First One" width="100px" className="imgServices"></img>
                          </div>
                          <div class="right-content">
                              <h4>Campos de Ténis</h4>
                              <p>Please do not re-distribute this template ZIP file on any template collection website. This is not allowed.</p>
                              <a href="#" class="text-button">Discover More</a>
                          </div>
                      </li>
                      <li class="feature-item">
                          <div class="left-icon">
                              <img src={image2} alt="second one" width="100px" className="imgServices"></img>
                          </div>
                          <div class="right-content">
                              <h4>Padel</h4>
                              <p>If you wish to support TemplateMo website via PayPal, please feel free to contact us. We appreciate it a lot.</p>
                              <a href="#" class="text-button">Discover More</a>
                          </div>
                      </li>
                      <li class="feature-item">
                          <div class="left-icon">
                              <img src={image3} alt="third gym training" width="100px" className="imgServices"></img>
                          </div>
                          <div class="right-content">
                              <h4>Futsal</h4>
                              <p>Credit goes to <a rel="nofollow" href="https://www.pexels.com" target="_blank">Pexels website</a> for images and video background used in this HTML template.</p>
                              <a href="#" class="text-button">Discover More</a>
                          </div>
                      </li>
                  </ul>
              </div>
              <div class="col-lg-6">
                  <ul class="features-items">
                      <li class="feature-item">
                          <div class="left-icon">
                              <img src={image4} alt="fourth muscle" width="100px" className="imgServices"></img>
                          </div>
                          <div class="right-content">
                              <h4>Futebol</h4>
                              <p>You may want to browse through <a rel="nofollow" href="https://templatemo.com/tag/digital-marketing" target="_parent">Digital Marketing</a> or <a href="https://templatemo.com/tag/corporate">Corporate</a> HTML CSS templates on our website.</p>
                              <a href="#" class="text-button">Discover More</a>
                          </div>
                      </li>
                      <li class="feature-item">
                          <div class="left-icon">
                              <img src={image5} alt="training fifth" width="100px" className="imgServices"></img>
                          </div>
                          <div class="right-content">
                              <h4>Restaurantes</h4>
                              <p>This template is built on Bootstrap v4.3.1 framework. It is easy to adapt the columns and sections.</p>
                              <a href="#" class="text-button">Discover More</a>
                          </div>
                      </li>
                      <li class="feature-item">
                          <div class="left-icon">
                              <img src={image6} alt="gym training" width="100px" className="imgServices"></img>
                          </div>
                          <div class="right-content">
                              <h4>Outros tipos de reserva</h4>
                              <p>Suspendisse fringilla et nisi et mattis. Curabitur sed finibus nisi. Integer nibh sapien, vehicula et auctor.</p>
                              <a href="#" class="text-button">Discover More</a>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
 </section>
 <section class="section" id="call-to-action">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <div class="cta-content">
                        <h2>Não <em>percas tempo</em>, Reserva <em>Aqui</em>!</h2>
                        <p>Uma plataforma de gestão de reservas muito fácil e prática para quem reserva e para quem recebe a reserva. Fácil para todos</p>
                        <div class="main-button scroll-to-section">
                            <a href="#our-classes">Regista-te como Administrador ou Cliente</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

 </div>
    );
  }

}

export default Index;