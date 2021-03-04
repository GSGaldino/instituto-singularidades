import React from 'react';
import { Heading, Text } from '@chakra-ui/react';

import { AiFillLike } from 'react-icons/ai';

import './styles.css';

function TextComponent(props) {
	function styles() {
		var strg = "";
		props.isFullWidth === true ? strg += '' : strg += 'container ';
		return strg;
	}

	return (
		<section id="Text" className={styles()}>
			{props.Title ? <Heading as="h3" size="md">{props.Title}</Heading> : ""}
			{props.DataType !== "Público-alvo" && props.Text ? props.Text.map((text) => (<Text fontSize="md" key={text.length}>{text}</Text>)) : ""}
			
			
			{props.DataType === "Público-alvo" && props.Text ? 
				<ul>
					{props.Text.map((text) => ( 
						<li key={Math.random()}><AiFillLike className="icon"/>{text}</li>
					))}
				</ul>
				: ""}
				
		</section>
	);
}

export default TextComponent;
