import React, { Component } from "react";
 import AlertMsg from '../Global/AlertMsg';
// import LoadingGif from '../Global/LoadingGif';
import background from '../../CssComponents/LoginPage/images/backgroundLogin.jpeg';

import '../../CssComponents/LoginPage/css/main.css';
import '../../CssComponents/LoginPage/css/util.css';
import '../../CssComponents/LoginPage/vendor/bootstrap/css/bootstrap.min.css';
import '../../CssComponents/LoginPage/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
class Login extends Component {

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

  componentDidMount() {
	
    if(sessionStorage.getItem('isAutenticated') == "true") {
		window.location = '/home';
	}
  }
 


	handleSubmit = async e => {
    e.preventDefault();

		//objeto login
		const loginData = {
			username:document.getElementById('username').value,
			password:document.getElementById('password').value
		};

		   //Enviar pedidos
			 const response = await fetch('http://localhost:8000/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(loginData)
			});
			//Aguardar API
			await response.json().then(resp => {
				//Verificar o estado da resposta da API
				let status = resp.status;
				switch (status) {
					case "Username ou password errados":
						this.setState({
                            alertText: "Username ou password errados. Por favor tente novamente",
                            alertisNotVisible: false,
                            alertColor: "danger"
                        });						
						break;
					case "Autenticado":
						sessionStorage.setItem('token', resp.token);
						sessionStorage.setItem('isAutenticated', true);
						window.location = '/home';
						break;
					case 
						"Realizou demasiadas autenticações na última hora. Tente novamente mais tarde":
						alert("Realizou demasiadas autenticações na última hora. Tente novamente mais tarde")
						break;
					case "A conta ainda não foi validada":
						this.setState({
                            alertText: "A conta ainda não foi validada. Verifique o seu email",
                            alertisNotVisible: false,
                            alertColor: "danger"
                        });						
						break;
					default:
						console.log("erro");
						break;
				}
			});
	}

 

  render() {
    return (

        <div className="limiter">
			
		<div className="container-login100" style={{backgroundImage: `url(${background})`}}>
			<div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
				<form className="login100-form validate-form" onSubmit={this.handleSubmit}>
					<span className="login100-form-title p-b-49">
						Login
					</span>

					<div className="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
						<span className="label-input100">Username</span>
						<input id="username" className="input100" type="text" name="username" placeholder="Insira o seu username" required></input>
						<span className="focus-input100" data-symbol="&#xf206;"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="Password is required">
						<span className="label-input100">Password</span>
						<input id="password" className="input100" type="password" name="pass" placeholder="Insira a Password" required></input>
						<span className="focus-input100" data-symbol="&#xf190;"></span>
					</div>
					<AlertMsg
                    text={this.state.alertText}
                    isNotVisible={this.state.alertisNotVisible}
                    alertColor={this.state.alertColor}
                />

					<div className="text-right p-t-8 p-b-31">
						<a href="/login">
							Forgot password?
						</a>
					</div>
					
					<div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn" style={{backgroundColor:"black"}}></div>
							<button className="login100-form-btn">
								Login
							</button>
						</div>
					</div>

					<hr></hr>
					<center>Sem conta ainda ? Registe-se já grátis !</center>

					<div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn" style={{backgroundColor:"black"}}></div>
							<button className="login100-form-btn" onClick={() => { window.location.href = '/register' }}> 
								Registar
							</button>
						</div>
					</div>
					
					
				</form>
			</div>
		</div>
	</div>

    );
  }
}

export default Login;