import React, { Component } from 'react';
import styled from "styled-components";

export default class Home extends Component {
	state = {}
	render() {
		return (
			<Background>
				<Content>
					<h1>Hello From Home</h1>
					<p>Hello From Home</p>
					<Button>Button</Button>
				</Content>
			</Background>
		);
	}
}

const Background = styled.div`
	text-align: center;
	height: 100vh;
	background-image: url("https://blog.oxforddictionaries.com/wp-content/uploads/mountain-names.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	display: grid;
	grid-template-columns: 1fr 6fr 1fr;
	grid-template-areas: ". a .";
	grid-auto-rows: 100%;
`;

const Content = styled.div`
	grid-area: a;
	align-self: center;
	color: white;
	background-color: rgba(0, 0, 0, 0.7);
`;

const Button = styled.button`
	width: 20%
	margin: 1em;
	padding: 10px;
	background-color: #3498db;
	color: #003a58;
	border-style: solid;
	border-color: #3498db;
	font-size: 1.5rem;
	&:hover {
		background-color: #003a58;
		color: #3498db;
		border-color: #003a58;
	}
`;
