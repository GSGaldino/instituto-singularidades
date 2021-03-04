import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function CardComponent(props) {
	return (
		<Link to={props.Link ? props.Link : "/#!"}>
			<div id="Card">
				<img src={props.cardBackground} loading="lazy" alt=""/>
				{props.Title ? <h4>{props.Title}</h4> : ""}
				{props.Text ? <p>{props.Text}</p> : ""}
			</div>
		</Link>
	);
}

export default CardComponent;
