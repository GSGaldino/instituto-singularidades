import React, { useEffect, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import CardComponent from '../../components/CardComponent';
import Footer from '../../components/Footer';
import Navbar from '../../components/Nav';
import { getProfessores } from '../../services/api';

import './styles.css';

const ListProfessores = () => {
	const [professores, setProfessores] = useState([]);

	useEffect(() => {
		const result = async () => {
			const data = await getProfessores();
			setProfessores(data);
		}
		result();
	}, []);

	return (
		<div>
			<Navbar />
			<div id="layoutMenuProf" className="container">
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
					<h1>Professores</h1>

					{professores.length >= 1 ?
						professores.map((item) => <CardComponent key={item.id} Link={item.Slug} cardBackground={item.img_url} />)
						:
						<p>Nenhum professor localizado!</p>
					}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default ListProfessores;
