import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, Button, Group, Div, Avatar, PanelHeader} from '@vkontakte/vkui';
import {HeaderButton, platform, IOS} from '@vkontakte/vkui';
import '../css/Home.css';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osname = platform();
const Home = props => (
	<Panel id={props.id}>
		<PanelHeader className="Header">
			 Печенька Online
		</PanelHeader>
		<Div className="main">
			<Div className="Div-top"> 
				<Button className="Button-top" size="x1" level="4" onClick={props.go} data-to="persik">Купить печеньки</Button>
				<p> имя и какой-то текст</p>
			</Div>

			<Div className="Div-bottom"> 
				<Button className="top" size="x1" level="2" onClick={props.go} data-to="persik">Разломить</Button>
				<Button className="bottom" size="x1" level="2" onClick={props.go} data-to="persik">Отправиьт печеньку другу</Button>
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
