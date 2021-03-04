import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import './styles.css';

function Main(props) {
	return (
		<div>
		<BrowserView renderWithFragment>
<section
			id="Main" style={{ backgroundImage:`url("${props.DesktopBackground}")`}}>
			<div className="column-1">
				{props.Title ? <h2>{props.Title}</h2> : ""}
				{props.Text ? props.Text.map((text) => (<p key={text.length}>{text}</p>)) : ""}
				{props.Button.length  ?<div className="button-holder"><a href="#form" className="buttonSubmit">{props.Button[0]}</a></div> :""}
			</div>
			<div className="column-2">
			</div>
		</section>
		</BrowserView>
		
		<MobileView renderWithFragment>
		<section
			id="Main" style={{ backgroundImage:`url("${props.MobileBackground}")`}}>
			<div className="column-1">
				{props.Title ? <h2>{props.Title}</h2> : ""}
				{props.Text ? props.Text.map((text) => (<p key={text.length}>{text}</p>)) : ""}
				{props.Button.length  ?<div className="button-holder"><a href="#form" className="buttonSubmit">{props.Button[0]}</a></div> :""}
			</div>
			<div className="column-2">
			</div>
		</section>
		</MobileView>
		</div>
	);
}

export default Main;
