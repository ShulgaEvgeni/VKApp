import React from 'react';
import connect from '@vkontakte/vkui-connect';
//import { View } from '@vkontakte/vkui';
//import '@vkontakte/vkui/dist/vkui.css';
/*
import Home from './panels/js/Home';
import Persik from './panels/js/Persik';
import Goroskop from './panels/js/Goroskop';
*/
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Main from './components/js/Main';
import Second from './components/js/Second';


class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			fetchedUser: null,
		};
	}

	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
	}

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};

	render() {
		return (
			<div className="blue">
				<div>
					<a href="/"> main </a> | <a href="/Second"> not main </a>
				</div>
				<Switch location={this.props.location}>
					<Route exact path="/" render={props => <Main {...props} />} />
					<Route exact path="/Second" render={props => <Second {...props} />} />
				</Switch>
			</div>
		);
	}
}

export default App;
