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
				<p>qwe qwe qwe</p>
			</div>
		);
	}
}

export default App;
