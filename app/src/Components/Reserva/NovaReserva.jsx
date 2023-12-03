import React, { Component } from "react";
 import AlertMsg from '../Global/AlertMsg';
// import LoadingGif from '../Global/LoadingGif';
import background from '../../CssComponents/LoginPage/images/backgroundLogin.jpeg';
import imgRestaurante from '../../CssComponents/Reservas/NovaReservaPage/images/imgRestaurante.jpg'
import '../../CssComponents/Reservas/NovaReservaPage/css/style.css'
import '../../CssComponents/LoginPage/vendor/bootstrap/css/bootstrap.min.css';
import '../../CssComponents/LoginPage/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../../CssComponents/Reservas/NovaReservaPage/js/custom.js'

class NovaReserva extends Component {

  constructor() {
    super();
    this.state = {
      alertText: "",
      alertisNotVisible: true,
      alertColor: "danger",
      dataGet: [],
      dataPost: [],
      dataDistritos : [],
      dataConcelhos : [],
      isHidden: false
    }
    this.getDistritos();
  }

  
  componentDidMount() {
	

  }
 

  getConcelho = async event => {
    const postData = {
        distrito:event.target.value,
        token:sessionStorage.getItem('token')
    };
       //Enviar pedidos
         const response = await fetch('http://localhost:8000/data/concelhos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData)
        });
        //Aguardar API
        await response.json().then(resp => {
            let status = resp.status;
            switch (status) {
                case "OK":
                    this.setState({ dataConcelhos: resp.response });
                    break;
                default:
                    console.log(this.state.alertText)
                break;
            }

        });

  }


    async getDistritos() {
        const response = await fetch('http://localhost:8000/data/distritos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': sessionStorage.getItem('token')
            },
        });
        //Aguardar API
        await response.json().then(resp => {
            let status = resp.status;
            switch (status) {
                case "OK":
                    this.setState({ dataDistritos: resp.response });
                    break;
                default:
                    console.log(this.state.alertText)
                break;
            }

        });

    }




  render() {
    return (
<div>
<div class="content">
    <br></br>
    <br></br>

<div class="container">
    	<div class="row">

                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb30 text-center">
                        <h2>Nova Reserva</h2>
                        </div>
                        </div>
	<div class="row">
	
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb30">
                        <div class="tour-booking-form">
                            <form>
                                <div class="row">
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                        <h4 class="tour-form-title">Dados da Reserva</h4>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <label class="control-label required" for="select">Distrito</label>
                                            <div class="select">
                                                <select id="distrito" name="select" class="form-control" onChange={this.getConcelho} required>
                                                    <option value="" selected="selected">Escolha o distrito</option>
                                                    {
                  this.state.dataDistritos.map((data, index) => {
                    return (

                <option key={index}value={data.nome}>{data.nome}</option>
                    )
                  })
                }

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <label class="control-label" for="datepicker">Concelho</label>
                                            <div class="select">
                                            <select id="distrito" name="select" class="form-control"  required>
                                                    <option value="">Escolha o concelho</option>
                                                    {
                  this.state.dataConcelhos.map((data, index) => {
                    return (

                <option key={index}value={data.municipio}>{data.municipio}</option>
                    )
                  })
                }

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <label class="control-label required" for="select">Tipo de Reserva:</label>
                                            <div class="select">
                                                <select id="select" name="select" class="form-control">
                                                    <option value="">Escolha o tipo de reserva:</option>
                                                    <option value="1">Campo Desportivo</option>
                                                    <option value="2">Restaurante</option>
                                                    <option value="3">Outras Reservas</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <label class="control-label required" for="select">Budgets</label>
                                            <div class="select">
                                                <select id="select" name="select" class="form-control">
                                                    <option value="">Stadard</option>
                                                    <option value="">Stadard</option>
                                                    <option value="">Stadard</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt30">
                                        <h4 class="tour-form-title">Your Travel Plan Detail</h4>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <label class="control-label" for="name">Name</label>
                                            <input id="name" type="text" placeholder="First Name" class="form-control" required></input>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <label class="control-label" for="email"> Email</label>
                                            <input id="email" type="text" placeholder="xxxx@xxxx.xxx" class="form-control" required></input>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <label class="control-label" for="phone"> Phone</label>
                                            <input id="phone" type="text" placeholder="(222) 222-2222" class="form-control" required></input>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <label class="control-label" for="country">Country</label>
                                            <input id="country" type="text" placeholder="India" class="form-control" required></input>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <label class="control-label" for="city">City</label>
                                            <input id="city" type="text" placeholder="Ahmedabad" class="form-control" required></input>
                                        </div>
                                    </div>
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <label class="control-label" for="textarea">Describe Your Travel Requirements</label>
                                            <textarea class="form-control" id="textarea" name="textarea" rows="4" placeholder="Write Your Requirements"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <button type="submit" name="singlebutton" class="btn btn-primary">send Enquiry</button>
                                    </div>
                                </div>
                                </form>
                        </div>
                        
                    </div>
	</div>
		<div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  text-center mt20">
              Created for <a href="https://goo.gl/9e2gny" target="_blank">easetemplate</a>
              </div></div>
</div>
</div>

<section class="section">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="text-center">
                    <ul class="col container-filter portfolioFilte list-unstyled mb-0" id="filter">
                        <li><a class="categories active" data-filter="*">All</a></li>
                        <li><a class="categories" data-filter=".branding">Restaurantes</a></li>
                        <li><a class="categories" data-filter=".design">Campos Desportivos</a></li>
                        <li><a class="categories" data-filter=".photo">Outras Reservas</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="port portfolio-masonry mt-4">
            <div class="portfolioContainer row photo">
                <div class="col-lg-4 p-4 ">
                    <div class="item-box">
                    <div class="containerTeste">
                    <div class="row" style={{height:"150px",border:"1px solid black"}}>
                        <div class="col-sm">
                        One of three columns
                        </div>
                        <div class="col-sm">
                        One of three columns
                        </div>
                        <div class="col-sm">
                        One of three columns
                        </div>
                    </div>
                    <div class="row" style={{height:"50px",border:"1px solid black"}}>
                        <div class="col-sm">
                        One of three columns
                        </div>
                        <div class="col-sm">
                        One of three columns
                        </div>
                    </div>
                    <div class="row justify-content-md-center">
                        <div class="col col-lg-2">
                        <button type="button" class="btn btn-primary">Primary</button>
                                                </div>
                    </div>



                    </div>                    

                </div>
                </div>

                <div class="col-lg-4 p-4 branding coffee">
                    <div class="item-box">
                        <a class="mfp-image" href="https://www.bootdey.com/image/800x540/D3D3D3/000000" title="Project Name">
                            <i class="item-container"></i>
                            <div class="item-mask">
                                <div class="item-caption">
                                    <p class="text-dark mb-0">Coffee</p>
                                    <h6 class="text-dark mt-1 text-uppercase">PageMaker including</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-lg-4 p-4 branding photo">
                    <div class="item-box">
                        <div class="row">
                        <a class="mfp-image" href="https://www.bootdey.com/image/800x540/D3D3D3/000000" title="Project Name">
                            <img class="item-container img-fluid" src={imgRestaurante} width={"800px"} alt=""></img>
                        </a>
                        <div class="col">
                            <br></br>
                        <center style={{paddingLeft:"5px"}}>Nigiri One</center>
                        </div>
                        </div>
                        <hr></hr>
                        <div class="row">
  <div class="col-1"></div>
  <div class="col">
  <button type="button" class="btn btn-danger" style={{marginLeft:"2px"}}>Reservar</button>
  </div>
  <div class="col">
  <button type="button" class="btn btn-danger" style={{marginLeft:"2px"}}>Ver Mais</button>
  </div>
</div>                    <br></br>
                    </div>
                </div>

                <div class="col-lg-4 p-4 branding design photo">
                    <div class="item-box">
                        <a class="mfp-image" href="https://www.bootdey.com/image/800x540/D3D3D3/000000" title="Project Name">
                            <img class="item-container img-fluid" src="https://www.bootdey.com/image/800x540/D3D3D3/000000" alt="work-img"></img>
                        </a>
                    </div>
                </div>

                <div class="col-lg-4 p-4 design photo">
                    <div class="item-box">
                        <a class="mfp-image" href="https://www.bootdey.com/image/800x540/D3D3D3/000000" title="Project Name">
                            <img class="item-container img-fluid" src="https://www.bootdey.com/image/800x540/D3D3D3/000000" alt="work-img"></img>
                            <div class="item-mask">
                                <div class="item-caption">
                                    <p class="text-dark mb-0">Pepers</p>
                                    <h6 class="text-dark mt-1 text-uppercase">Therefore Always</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-lg-4 p-4 branding design coffee">
                    <div class="item-box">
                        <a class="mfp-image" href="https://www.bootdey.com/image/800x540/D3D3D3/000000" title="Project Name">
                            <img class="item-container img-fluid" src="https://www.bootdey.com/image/800x540/D3D3D3/000000" alt="work-img"></img>
                            <div class="item-mask">
                                <div class="item-caption">
                                    <p class="text-dark mb-0">Bottle</p>
                                    <h6 class="text-dark mt-1 text-uppercase">Therefore Always</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-lg-4 p-4 branding design">
                    <div class="item-box">
                        <a class="mfp-image" href="https://www.bootdey.com/image/800x540/D3D3D3/000000" title="Project Name">
                            <img class="item-container img-fluid" src="https://www.bootdey.com/image/800x540/D3D3D3/000000" alt="work-img"></img>
                            <div class="item-mask">
                                <div class="item-caption">
                                    <p class="text-dark mb-0">Watch</p>
                                    <h6 class="text-dark mt-1 text-uppercase">Sometime Active</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-lg-4 p-4 branding design photo coffee">
                    <div class="item-box">
                        <a class="mfp-image" href="https://www.bootdey.com/image/800x540/D3D3D3/000000" title="Project Name">
                            <img class="item-container img-fluid" src="https://www.bootdey.com/image/800x540/D3D3D3/000000" alt="work-img"></img>
                            <div class="item-mask">
                                <div class="item-caption">
                                    <p class="text-dark mb-0">Milk</p>
                                    <h6 class="text-dark mt-1 text-uppercase">Sometime Active</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-lg-4 p-4 branding design photo coffee">
                    <div class="item-box">
                        <a class="mfp-image" href="https://www.bootdey.com/image/800x540/D3D3D3/000000" title="Project Name">
                            <img class="item-container img-fluid" src="https://www.bootdey.com/image/800x540/D3D3D3/000000" alt="work-img"></img>
                            <div class="item-mask">
                                <div class="item-caption">
                                    <p class="text-dark mb-0">Milk</p>
                                    <h6 class="text-dark mt-1 text-uppercase">Sometime Active</h6>
                                </div>
                            </div>
                        </a>
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

export default NovaReserva;