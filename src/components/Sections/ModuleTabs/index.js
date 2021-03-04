import React, { useState } from 'react';
import { Heading } from '@chakra-ui/react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import './styles.css';

function ModuleTabs(props) {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div>
			<div id="module-tabs" className="container">
				{props.Title ? <Heading as="h4" size="md">{props.Title}</Heading> : ""}

				{props.DataType === "Disciplina" ?
					<ol className="group-list">
						{props.Data && props.Data.map((item) => (
							<li className="group-list-item" key={Math.random()}>{item}</li>
						))}
					</ol>
					: ""}

				{props.DataType !== "Disciplina" ?
					<Tabs selectedIndex={activeIndex} onSelect={index => setActiveIndex(index)}>
						<TabList>
							{props.Data && props.Data.map((item) => (
								<Tab key={item.nameTab}>{item.nameTab}</Tab>
							))}
						</TabList>

						{props.Data && props.Data.map((item) => (
							<TabPanel key={Math.random()}>
								<ol className="group-list-tab">
									{item.descricao.map((item) => (
										<li key={Math.random()}>{item}</li>
									))}
								</ol>
							</TabPanel>
						))}

					</Tabs>
					: ""}
			</div>
		</div>
	);
}

export default ModuleTabs;