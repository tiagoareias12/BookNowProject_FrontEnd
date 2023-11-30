import React, { Component } from "react";
import AlertMsg from '../Global/AlertMsg';
import AlertMsg2 from '../Global/AlertMsg';
//import LoadingGif from '../Global/LoadingGif';
import '../../CssComponents/RegisterPage/css/style.css';
import '../../CssComponents/RegisterPage/fonts/material-icon/css/material-design-iconic-font.min.css';
import background from '../../CssComponents/RegisterPage/images/backgroundRegister.jpg';

class Register extends Component {

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

    }

    handleSubmit = async e => {
        e.preventDefault();

        //verificar se as passwords são iguais
        if (
            document.getElementById("password").value !==
            document.getElementById("re_password").value
        ) {
            this.setState({
                alertText: "As palavras-passe não são iguais",
                alertisNotVisible: false,
                alertColor: "light"
            });
            return null;
        }
        else {
            const registerData = {
                nome: document.getElementById('name').value,
                email: document.getElementById('email').value,
                username: document.getElementById('username').value,
                hashPassword: document.getElementById('password').value,
                dataNascimento: document.getElementById('data').value,
                localidade: document.getElementById('loca').value,
                isAdmin:  document.getElementById('selectClient').value
            };
            //Enviar pedidos
            const response = await fetch('http://localhost:8000/user/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "x-access-token": sessionStorage.getItem("token")
                },
                body: JSON.stringify(registerData)
            });
            await response.json().then(resp => {
                let status = resp.status;
                switch (status) {
                    case "Email e/ou username já existe(m) na base de dados":
                        this.setState({
                            alertText: "Já existe uma conta com este endereço de email e/ou username",
                            alertisNotVisible: false,
                            alertColor: "danger"
                        });
                        break;
                    case "Not Created":
                        this.setState({
                            alertText: "A conta não foi criada. Por favor tente novamente mais tarde",
                            alertisNotVisible: false,
                            alertColor: "danger"
                        });
                        break;
                    case "Utilizador Criado com Sucesso. Por favor verifique o email":
                        this.setState({
                            alertText: "A sua conta foi criada com sucesso. Por favor verifique o seu email para concluir o registo. ",
                            alertisNotVisible: false,
                            alertColor: "success"
                        });
                        var botãoCriarConta = document.getElementById('submit');
                        botãoCriarConta.style.display="none";
                        break;
                    default:
                        console.log("erro")
                }
            });
        }
    }


    render() {
        return (


            <section class="signup" style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center center" }}>
                <AlertMsg2
                    text={this.state.alertText}
                    isNotVisible={this.state.alertisNotVisible}
                    alertColor={this.state.alertColor}
                />
                <div class="containerRegister" >
                    <div class="signup-content">
                        <form method="POST" id="signup-form" class="signup-form" onSubmit={this.handleSubmit}>
                            <h2 class="form-title" style={{ fontWeight: "bold" }}>Criar nova conta</h2>
                            <div class="form-group">
                                <input type="text" class="form-input" name="name" id="name" placeholder="Nome" required />
                            </div>
                            <div class="form-group">
                                <input type="date" class="form-input" name="data" id="data" placeholder="Data de Nascimento" required />

                            </div>
                            <div class="form-group">
                                <input type="text" class="form-input" name="loca" id="loca" placeholder="Localidade" required />
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-input" name="email" id="email" placeholder="Email" required />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-input" name="username" id="username" placeholder="Username" required />
                            </div>
                            <div class="form-group">
                                <select id="selectClient" class="form-input" aria-label=".form-select-lg example" required>
                                    <option value="">Tipo de Utilizador</option>
                                    <option value="false">Cliente</option>
                                    <option value="true">Administrador</option>
                                </select>                            
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-input" name="password" id="password" placeholder="Password" required />
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-input" name="re_password" id="re_password" placeholder="Repita a Password" required />
                            </div>

                            <div class="form-group">
                                <input type="submit" name="submit" id="submit" class="form-submit" value="Registar" />
                            </div>
                            <AlertMsg
                                text={this.state.alertText}
                                isNotVisible={this.state.alertisNotVisible}
                                alertColor={this.state.alertColor}
                            />
                        </form>
                        <p class="loginhere">
                            Já tem uma conta ? <a href="login" class="loginhere-link">Login aqui</a>
                        </p>
                    </div>
                </div>

            </section>

        );
    }

}

export default Register;