import React, { Component } from "react";
import '../../CssComponents/404Page/css/style.css';
class NotFindPage extends Component {
	render() {
		return (
			<div id="notfound">
		<div class="notfound-bg"></div>
		<div class="notfound">
			<div class="notfound-404">
				<h1>404</h1>
			</div>
			<h2>Oops! Página Não encontrada</h2>
			{/* <form class="notfound-search">
				<input type="text" placeholder="Search..."></input>
				<button type="button">Search</button>
			</form> */}
			<div class="notfound-social">
				<a href="#"><i class="fa fa-instagram"></i></a>
				<a href="#"><i class="fa fa-facebook"></i></a>
			</div>
			<a href="/">Voltar para a página principal</a>
		</div>
	</div>

		);
	}
}

export default NotFindPage;