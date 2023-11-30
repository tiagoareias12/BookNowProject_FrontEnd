import React, { Component } from "react";
import AlertMsg from '../Global/AlertMsg';
import LoadingGif from '../Global/LoadingGif';
import '../../CssComponents/EmailVerification/css/emailverification.css';
import background from '../../CssComponents/EmailVerification/images/background.jpg';
class EmailVerification extends Component {

  constructor() {
    super();
    this.state = {
      alertText: "",
      alertisNotVisible: true,
      alertColor: "danger",
      dataGet: [],
      dataPost: [],
      isHidden: true
    }
  }

  componentDidMount() {
    this.setState({ loading: true })

  }
 
  handleSubmit = async e => {
    e.preventDefault();
    const dados = {
      secretKey:document.getElementById('chave').value
    };
    

     //Enviar pedidos
     const response = await fetch('http://localhost:8000/user/create/verify', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          "x-access-token": sessionStorage.getItem("token")
      },
      body: JSON.stringify(dados)
  });
  await response.json().then(resp => {
    let status = resp.status;

    switch(status){
      case "Conta não existe, utilizador não existe":
          this.setState({
            alertText: "A chave que inseriu não é válida. Tente novamente com a chave que recebeu do email de confirmação",
            alertisNotVisible: false,
            alertColor: "warning"
        });
        break;
      case "Conta vericada com sucesso":
          this.setState({
            alertText: "A sua conta foi confirmada com sucesso. Obrigado por se registar. Será reencaminhado para a página de login.",
            alertisNotVisible: false,
            alertColor: "warning"
        });
        this.setState({ isHidden: false })
        setTimeout(() => {
          window.location="/login";
          
        }, 7000);
        break;
        default:console.log("erro")
    }
  });
  }
 

  render() {
    return (

<div className="inicioContainer" style={{width:"100%",backgroundImage: `url(${background})`}}>
<center>
<div class="containerEmail">
<h2 class="form-title" style={{fontWeight:"bold"}}>Verificação de Email</h2>
<p className="text" style={{padding:"5px 5px"}}>
    Para o processo de registo da nova conta ficar concluída com sucesso, por favor, introduza a chave existente no email que recebeu e que o levou até esta página.
</p>
<br></br>
<br></br>
<span>Verificação de Email</span>
<form className="form-group" onSubmit={this.handleSubmit}>
<div class="form-group" style={{width:"25%",border:"1px solid"}}>
<input type="text" class="form-input" name="chave" id="chave" placeholder="Chave" required/>
</div>
<hr></hr>
<div class="form-group" style={{width:"35%"}}>
<input type="submit" name="submit" id="submit" class="form-submit" value="Confirmar conta"/>
</div>
<AlertMsg
                    text={this.state.alertText}
                    isNotVisible={this.state.alertisNotVisible}
                    alertColor={this.state.alertColor}
                />
   <center>
            <LoadingGif
              loading={this.state.isHidden}
            />
          </center>
  </form>
</div>
</center>
</div>


    );
  }

}

export default EmailVerification;