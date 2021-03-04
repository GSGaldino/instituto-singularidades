import React, {useEffect, useState} from 'react';
import { AiFillLike } from 'react-icons/ai'

import './styles.css';

function OcupationArea(props) {
	const [data, setData] = useState([])

	useEffect(() => {
		setData(["Marketing Digital","Jogos Digitais","Criadores de conteúdo"]);
},[]);

	return (
		<div>
			<div id="ocupation-area" className="container">
				{props.Title ? <h3>{props.Title}</h3> : ""}
				
				{data ? 
					<div className="flex-itens">
						{data.map((item,index) => 
							<div key={index} className="item">
								<AiFillLike className="icon"/>
								<p>{item}</p>
							</div>
						)}
					</div>
				: ""}
			</div>
		</div>
	);
}

export default OcupationArea;
