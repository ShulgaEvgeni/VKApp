import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, Button, Group, Div, Avatar, PanelHeader} from '@vkontakte/vkui';
import '../css/Home.css';

const Home = props => (
	<Panel id={props.id}>
		<PanelHeader>Example</PanelHeader>
		<Div className="main">
			<Div> 
				<Button size="x1" level="1" onClick={props.go} data-to="persik">Show me the Persik, please</Button>
			</Div>

			<Div> 
			
			</Div>

			<Div className="Div-bottom"> 
				<Button className="Button-bottom" size="xl" level="2" onClick={props.go} data-to="persik">Show me the Persik, please</Button>
				<Button className="Button-bottom" size="xl" level="2" onClick={props.go} data-to="persik">Show me the Persik, please</Button>
			</Div>	
		</Div>
	</Panel>
);

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
