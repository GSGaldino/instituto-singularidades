import React, { useEffect, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import CardComponent from '../../components/CardComponent';
import Footer from '../../components/Footer';
import Navbar from '../../components/Nav';
import { Heading } from '@chakra-ui/react';

import { getCursos } from '../../services/api';

import './styles.css';

const ListCursos = () => {
	const [cursos, setCursos] = useState([]);

	useEffect(() => {
		const result = async () => {
			const data = await getCursos();
			setCursos(data);
		}
		result();
	}, []);

	return (
		<div style={{background: '#EDEDED'}}>
			<Navbar />
			<div id="layoutMenuCurso">
				<MobileView>
					.
        </MobileView>
				<BrowserView renderWithFragment>
					{/* 
					<div className="sidebar">
						<p>Selecione a área de interresse para filtrar:</p>
					</div>
					*/}
				</BrowserView>
				<div className="carContainer">
					<Heading as="h3" size="lg" className="title" margin="2">Cursos online</Heading>

					{cursos.length >= 1 ?
						cursos.map((item) => <CardComponent key={item.id} Link={item.Slug} cardBackground={item.card_img} />)
						:
						<p>Nenhum curso localizado!</p>
					}
				</div>
			</div>
			<Footer />
		</div>
	);
}
export default ListCursos;
