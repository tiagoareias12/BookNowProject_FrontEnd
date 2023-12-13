import React, { Component } from "react";
 import AlertMsg from '../Global/AlertMsg';
// import LoadingGif from '../Global/LoadingGif';
import background from '../../CssComponents/LoginPage/images/backgroundLogin.jpeg';
import '../../CssComponents/Reservas/GestaoReservaPage/css/style.css'
import '../../CssComponents/LoginPage/css/main.css';
import '../../CssComponents/LoginPage/css/util.css';
import '../../CssComponents/LoginPage/vendor/bootstrap/css/bootstrap.min.css';
import '../../CssComponents/LoginPage/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
class GestaoReserva extends Component {

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

    async getTipoSistema(){
        var tipoSistema = document.getElementById('tipoReserva').value;
        if(tipoSistema == "1"){
            document.getElementById('preco').removeAttribute('disabled','');
            document.getElementById('numeroCampos').removeAttribute('disabled','');
            document.getElementById('mesas').setAttribute('disabled','');
            document.getElementById('mesas').value = "";

        }
        if(tipoSistema == "2"){
            document.getElementById('mesas').removeAttribute('disabled','');
            document.getElementById('preco').setAttribute('disabled','');
            document.getElementById('numeroCampos').setAttribute('disabled','');
            document.getElementById('preco').value = "";
            document.getElementById('numeroCampos').value = "";

        }
        if(tipoSistema == ""){
            document.getElementById('mesas').setAttribute('disabled','');
            document.getElementById('preco').setAttribute('disabled','');
            document.getElementById('numeroCampos').setAttribute('disabled','');


        }
    }
    EscondeForm(){

        if(document.getElementById('formNovoSistema').style.visibility =="hidden"){
            document.getElementById('formNovoSistema').style.visibility ="visible";
        }
        else{
            document.getElementById('formNovoSistema').style.visibility ="hidden";
        }
    }


    novoSistema = async e => {
      e.preventDefault();
      alert("vai ser criado um novo sistema de reserva");
      alert(document.getElementById('distrito'));
      const postData = {
        distrito:document.getElementById('distrito').value,
        concelho:document.getElementById('concelho').value,
        tipoReserva:document.getElementById('tipoReserva').value,
        nome: document.getElementById('name').value,
        preco: document.getElementById('preco').value,
        numeroCampos: document.getElementById('numeroCampos').value,
        mesas: document.getElementById('mesas').value,
        token:sessionStorage.getItem('token')
    };
    console.log(postData);
         const response = await fetch('http://localhost:8000/gestao/novoSistema', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData)
        });
        await response.json().then(resp => {
            let status = resp.status;
            switch (status) {
                case "OK":
                    alert("Novo sistema criado com sucesso");
                    break;
                default:
                    console.log(this.state.alertText)
                break;
            }

        });

    }
  

  render() {
    return (

<div class="content">
    <br></br>
    <br></br>

<div class="container">
    	<div class="row">

                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb30 text-center">
                        <h2>Gestão de Reservas</h2>
                        </div>
                        </div>
	<div class="row">
     <span>Criar novo sistema de reserva</span>
    <a class="" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" style={{paddingLeft:"5px"}}>
      
    <center>
    <i id="setabaixo" class="fa fa-plus fa-lg" style={{paddingLeft:"5px",paddingBottom:"5px"}}></i>
    <i id="setcima" class="fa fa-sort-up" style={{paddingLeft:"5px",visibility:"hidden"}}></i>
    </center>
    </a>
    <div class="collapse" id="collapseExample">
    <form id="formNovoSistema" className="login100-form validate-form" onSubmit={this.novoSistema}>
    <hr></hr>
                        <div class="tour-booking-form">
                            <form>
                                <div class="row">
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                        <h4 class="tour-form-title">Dados Necessários</h4>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <label class="control-label required" for="select">Distrito do Local da Reserva</label>
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
                                            <label class="control-label" for="datepicker">Concelho do Local da Reserva</label>
                                            <div class="select">
                                            <select id="concelho" name="select" class="form-control"  required>
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
                                                <select id="tipoReserva" name="select" class="form-control" onChange={this.getTipoSistema}>
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
                                            <label class="control-label required" for="select">Nome do Sistema</label>
                                            <input id="name" type="text" placeholder="Por exemplo: Restaurante X ou Campo de Ténis de X" class="form-control" required></input>
                                        </div>
                                    </div>

                
                                    <div id="inputsCampo" class="col-sm-2" >
                                    <div class="form-group">
                                        <label class="control-label required" for="select">Preço€/hora</label>
                                        <input id="preco" type="text" placeholder="Por exemplo: 5" class="form-control"  required disabled></input>
                                    </div>
                                    </div>
                                    <div id="inputsCampo2" class="col-sm-2">
                                    <div class="form-group">
                                        <label class="control-label required" for="select">Campos disponiveis</label>
                                        <input id="numeroCampos" type="text" placeholder="Por exemplo: 2" class="form-control"  required disabled></input>
                                    </div>
                                    </div>

                                    <div id="inputsRestaurante" class="col-sm-4">
                                    <div class="form-group">
                                        <label class="control-label required" for="select">Mesas disponiveis</label>
                                        <input id="mesas" type="text" placeholder="Mesas para reserva, por exemplo 10" class="form-control" required disabled></input>
                                    </div>
                                    </div>


                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <button type="submit" name="singlebutton" class="btn btn-primary">Criar Sistema de Reserva</button>
                                    </div>
                                </div>
                                </form>
                        </div>
                        
					
				</form>
                </div>

	</div>
		<div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  text-center mt20">
              <br></br>
              </div></div>
              <div class="row">
<span>Gerir Reservas</span>
<a class="" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
    <center>
    <i id="setabaixo" class="fa fa-plus fa-lg" style={{paddingLeft:"5px",paddingBottom:"5px"}}></i>
    <i id="setcima" class="fa fa-sort-up" style={{paddingLeft:"5px",visibility:"hidden"}}></i>
    </center>
    </a>
<div class="collapse" id="collapseExample2">
<div class="container">
<hr></hr>

  <ul class="list-group">
    <li class="list-group-item clearfix">
      <img class="img-responsive img-rounded" src="http://placehold.it/256/163a63" alt=""/>
      <h3 class="list-group-item-heading">
        Amazing Item
        <span class="label label-danger pull-right">NEW !</span>
      </h3>
      <p class="list-group-item-text lead">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio.
        <br />
        <a href="#"><small>Details&#8230;</small></a>
      </p>
      <div class="btn-toolbar pull-right" role="toolbar" aria-label="">
        <div class="btn-group">
          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-fw fa-list"></i> <span class="caret"></span></button>
          <ul class="dropdown-menu">
            <li><a href="#">Add to new list</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">A list</a></li>
            <li><a href="#">Another list</a></li>
            <li><a href="#">Third list</a></li>
          </ul>
        </div>
        <a href="#" class="btn btn-default">Add to cart</a>
        <a href="#" class="btn btn-primary">$29.99</a>
      </div>
    </li>
    <hr></hr>
    <li class="list-group-item clearfix">
      <img class="img-responsive img-rounded" src="http://placehold.it/256/163a63" alt=""/>
      <h3 class="list-group-item-heading">
        Something great
      </h3>
      <p class="list-group-item-text lead">
        Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus.
        <br />
        <a href="#"><small>Details&#8230;</small></a>
      </p>
      <div class="btn-toolbar pull-right" role="toolbar" aria-label="">
        <div class="btn-group">
          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-fw fa-list"></i> <span class="caret"></span></button>
          <ul class="dropdown-menu">
            <li><a href="#">Add to new list</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">A list</a></li>
            <li><a href="#">Another list</a></li>
            <li><a href="#">Third list</a></li>
          </ul>
        </div>
        <a href="#" class="btn btn-default">Add to cart</a>
        <a href="#" class="btn btn-primary">$42.50</a>
      </div>
    </li>
    <li class="list-group-item clearfix">
      <img class="img-responsive img-rounded" src="http://placehold.it/256/163a63" alt=""/>
      <h3 class="list-group-item-heading">
        Another thing
        <span class="label label-default pull-right">SOLD OUT</span>
      </h3>
      <p class="list-group-item-text lead">
        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
        <br />
        <a href="#"><small>Details&#8230;</small></a>
      </p>
      <div class="btn-toolbar pull-right" role="toolbar" aria-label="">
        <div class="btn-group">
          <button type="button" class="btn disabled btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-fw fa-list"></i> <span class="caret"></span></button>
          <ul class="dropdown-menu">
            <li><a href="#">Add to new list</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">A list</a></li>
            <li><a href="#">Another list</a></li>
            <li><a href="#">Third list</a></li>
          </ul>
        </div>
        <a href="#" class="btn disabled btn-default">Add to cart</a>
        <a href="#" class="btn disabled btn-primary">$1.99</a>
      </div>
    </li>
    <li class="list-group-item clearfix">
      <img class="img-responsive img-rounded" src="http://placehold.it/256/163a63" alt=""/>
      <h3 class="list-group-item-heading">
        Yet another item
      </h3>
      <p class="list-group-item-text lead">
        Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod.
        <br />
        <a href="#"><small>Details&#8230;</small></a>
      </p>
      <div class="btn-toolbar pull-right" role="toolbar" aria-label="">
        <div class="btn-group">
          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-fw fa-list"></i> <span class="caret"></span></button>
          <ul class="dropdown-menu">
            <li><a href="#">Add to new list</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">A list</a></li>
            <li><a href="#">Another list</a></li>
            <li><a href="#">Third list</a></li>
          </ul>
        </div>
        <a href="#" class="btn btn-default">Add to cart</a>
        <a href="#" class="btn btn-primary">$16.00</a>
      </div>
    </li>
    <li class="list-group-item clearfix">
      <img class="img-responsive img-rounded" src="http://placehold.it/256/163a63" alt=""/>
      <h3 class="list-group-item-heading">
        Something else
      </h3>
      <p class="list-group-item-text lead">
        Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod.
        <br />
        <a href="#"><small>Details&#8230;</small></a>
      </p>
      <div class="btn-toolbar pull-right" role="toolbar" aria-label="">
        <div class="btn-group">
          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-fw fa-list"></i> <span class="caret"></span></button>
          <ul class="dropdown-menu">
            <li><a href="#">Add to new list</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">A list</a></li>
            <li><a href="#">Another list</a></li>
            <li><a href="#">Third list</a></li>
          </ul>
        </div>
        <a href="#" class="btn btn-default">Add to cart</a>
        <a href="#" class="btn btn-primary">$12.99</a>
      </div>
    </li>
    <li class="list-group-item clearfix">
      <img class="img-responsive img-rounded" src="http://placehold.it/256/163a63" alt=""/>
      <h3 class="list-group-item-heading">
        Last thing here
      </h3>
      <p class="list-group-item-text lead">
        Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum.
        <br />
        <a href="#"><small>Details&#8230;</small></a>
      </p>
      <div class="btn-toolbar pull-right" role="toolbar" aria-label="">
        <div class="btn-group">
          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-fw fa-list"></i> <span class="caret"></span></button>
          <ul class="dropdown-menu">
            <li><a href="#">Add to new list</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">A list</a></li>
            <li><a href="#">Another list</a></li>
            <li><a href="#">Third list</a></li>
          </ul>
        </div>
        <a href="#" class="btn btn-default">Add to cart</a>
        <a href="#" class="btn btn-success">Free!</a>
      </div>
    </li>
  </ul>
  </div>
</div>
</div>

</div>
<br></br>

</div>
    );
  }
}

export default GestaoReserva;