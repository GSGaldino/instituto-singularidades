import React, { useEffect, useState } from 'react';
import { getProfessores } from '../../../services/api';
import CardComponent from '../../CardComponent';

import { Heading } from '@chakra-ui/react';

import './styles.css'

function ProfessoresFilter(props) {
	const [professores, setProfessores] = useState([]);
	let filterProfessores = [];

	useEffect(() => {
		const result = async () => {
			const data = await getProfessores();
			setProfessores(data);
			//filterProf();
		}
		result();

	}, [props.idCurso]);

	function filterProf() {
		professores.forEach(element => {
			element.Cursos.forEach((x) => {
				if (x === props.idCurso) {
					filterProfessores.push(element);
				} else {
					//console.log(x === props.idCurso);
				}
			});
		});
		return (
			filterProfessores.length >= 1 ?
				filterProfessores.map((item) => <CardComponent key={item.id} Link={item.Slug} cardBackground={item.img_url} />)
				:
				<p>Nenhum professor localizado!</p>
		);
	};

	return (
		<div>

			<div id="professores-filter" className="carContainer">
				<Heading as="h4" size="md" className="title">Professores do curso</Heading>
				{filterProf()}
			</div>

		</div>
	);
}

export default ProfessoresFilter;
