import React, { Component } from "react";
import '../../CssComponents/Header/css/header.css';

var isAutenticated = true;

if (sessionStorage.getItem('isAutenticated') == null){
  isAutenticated = false;
}




class Header extends Component {

logout() {
sessionStorage.clear();
window.location="/";

  
}

// componentDidMount(){
//   alert("teste");
//   const username = document.getElementById('username').value;



//   //Enviar pedidos
//   const response = fetch('http://localhost:8000/user/' + username, {
//    method: 'GET',
//    headers: {
//      'Content-Type': 'application/json',
//    }			});
//  //Aguardar API
//  response.json().then(resp => {
//    //Verificar o estado da resposta da API
//    alert("teste");
//    console.log(resp);
//  });

// }

	render() {
		return (
<nav className="navbar navbar-icon-top navbar-expand-lg navbar-custom">
  <a className="navbar-brand" href="#">BookNow</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  {(isAutenticated == true) ?(
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">
          <i className="fa fa-home"></i>
          Home
          <span className="sr-only">(current)</span>
          </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fa fa-bell">
            <span className="badge badge-danger">11</span>
          </i>
          Notificações
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fa fa-envelope-o">
            <span className="badge badge-warning">5</span>
          </i>
          Mensagens
        </a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fa fa-calendar">
          </i>
          Reservas
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Ver Reservas para Hoje</a>
          <a className="dropdown-item" href="#">Ver Reservas para Amanhã</a>
          <a className="dropdown-item" href="#">Ver Mais Reservas</a>
          <a className="dropdown-item" href="#">Cancelar Reservas</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Gestão de Reservas</a>
        </div>
      </li>
    </ul>
  ):(
    <ul className="navbar-nav mr-auto">
    </ul>
  )}
    <ul className="navbar-nav ">
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fa fa-user">
          </i>
          Perfil
        </a>
      </li>
      {(isAutenticated == true) ?(
      <li className="nav-item">
      <button className="nav-link" onClick={this.logout}>
        <i className="fa fa-power-off">
        </i>
        Terminar Sessão
      </button>
    </li>

      ):(
        <li className="nav-item">
        <a className="nav-link" href="/login">
          <i className="fa fa-user">
          </i>
          Login / Registar
        </a>
      </li>


      )}
      {/* <li className="nav-item">
        <a className="nav-link" href="#">
        <button className="btn btn-danger" onClick={this.logout}>Terminar Sessão</button>
        </a>
      </li> */}
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
);
	}
}

export default Header;