
import React from 'react';
import { Heading } from '@chakra-ui/react';

import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box
} from "@chakra-ui/react";

import './styles.css';

function FAQ(props) {

	return (

		<div id="faq" className="container">
			<Heading as="h3" size="md">FAQ</Heading>
			<div className="accordion-container">

				<Accordion allowToggle>
					{props.Data.map((item, index) => (
						<AccordionItem key={index}>
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left">
										<Heading color="#1D3A65" as="h4" size="sm">{item.pergunta}</Heading>
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								{item.resposta.map((item) => (
									<p key={item.toString()}>{item}</p>
								))}
							</AccordionPanel>
						</AccordionItem>
					))}
				</Accordion>

			</div>
		</div>

	);
}

export default FAQ;
