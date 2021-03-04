import React from 'react';
import CardComponent from '../CardComponent';

import './styles.css';

function SelectionCards(props) {
	
	return (
		<div>
			<div id="selection-card" className="container">
				{props.Title ? <h3>{props.Title}</h3> : ""}
				
				{props.Data ? 
					<div className="flex-itens">
						{props.DataType === "Curso" && props.Data.length >= 1 ?
						props.Data.map((item) => <CardComponent key={item.id} Link={item.Slug} cardBackground={item.card_img}/>)
						:	"" }

						{props.DataType !== "Curso" && props.Data.length >= 1 ?
						props.Data.map((itemx) => <CardComponent key={itemx.id} Title={itemx.name} Link={itemx.Slug}/>)
						: "" }
					</div>
				: ""}
			</div>
		</div>
	);
}

export default SelectionCards;
