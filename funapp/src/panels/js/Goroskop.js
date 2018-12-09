import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, HeaderButton, platform, IOS} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import '../css/Goroskop.css';
import axios from 'axios';

const osname = platform();

class Goroskop extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: 'Сообщение',
		}
	}

	redClick(message){
		this.setState({message: message});

	  	var apiURL = 'https://goroskop2.irsib.pro/backend/API.php';

	  	axios.get(apiURL, {
	  		params: {
	  			a: 'get_goroskop',
	  			sign: 1,
	  			user_id: 2,
	  		}
	  	}).then(function(response) {
	  		console.log(response);
	  		
	  	});
	}

  handleNameChange = event => {
  	var val = event.target.value;
  	this.setState({message: val});
  }

	render() {
		return (
			<Panel id={this.props.id}>
				<PanelHeader
					left={<HeaderButton onClick={this.props.go} data-to="home">
						{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
					</HeaderButton>}
				>
				</PanelHeader>
				<p>{this.state.message}</p>
				<p className="red" onClick={() => this.redClick("test")}>teststs</p>
				<input type="text" name="name" value={this.state.message} onChange={this.handleNameChange} />
			</Panel>
		);
	}
}

/*const Goroskop = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
		</PanelHeader>
		<p className="red" onClick="">teststs</p>
	</Panel>
);*/

Goroskop.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Goroskop;