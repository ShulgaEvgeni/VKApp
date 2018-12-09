import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, Button, Group, Div, Avatar, PanelHeader} from '@vkontakte/vkui';
import { HeaderButton, platform, IOS} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import axios from 'axios';

const osname = platform();

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: 'Сообщение',
		}
	}

	redClick(message){
		this.setState({message: message});

	  	var apiURL = 'https://api.vk.com/method/account.users.get';

	  	axios.get(apiURL, {
	  		params: {
	  			user_ids: '135298967',	  			
	  			'params[v]': '5.92',
	  		}
	  	}).then(function(response) {
	  		console.log(response);
	  		this.setState({message: '1'});	  		
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
	



/*
const Home = props => (
	<Panel id={props.id}>
		<PanelHeader>Example</PanelHeader>
		{props.fetchedUser &&
		<Group title="User Data Fetched with VK Connect">
			<ListItem
				before={<Avatar src={props.fetchedUser.photo_200}/>}
				description={props.fetchedUser.city.title}
			>
				{`${props.fetchedUser.first_name} ${props.fetchedUser.last_name}`}
			</ListItem>
		</Group>}

		<Div> 
			<Button size="xl" level="2" onClick={props.go} data-to="persik">Show me the Persik, please</Button>
			<p>
			</p>
		</Div>

		<Div> 
		
		</Div>

		<Div> 

			<Button size="xl" level="2" onClick={props.go} data-to="persik">Show me the Persik, please</Button>
			<Button size="xl" level="2" onClick={props.go} data-to="persik">Show me the Persik, please</Button>
		</Div>	
	</Panel>
);
*/

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
