import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import connect from '@vkontakte/vkui-connect';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import '../css/Second.css';

class Second extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: 'Сообщение',
		}
	}

	render() {
		return (
			<div>
				<p> Second qwe </p>
			</div>
		);
	}
}

export default Second;