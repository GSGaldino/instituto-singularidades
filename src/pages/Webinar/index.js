import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../../components/Footer';
import Generic from '../../components/Generic';
import Navbar from '../../components/Nav';
import { getCursoFilter } from '../../services/api';

const Webinar = (props) => {
	const [curso, setCurso] = useState({
		id: 0,
		nameCurso: '',
		briefing: [],
		img_url: '',
		Slug: '',
		Valor: '',
		informacaoBasica: [],
		propostaCurricular: [],
		modulos: []
	});

	useEffect(() => {
		const result = async () => {
			const data = await getCursoFilter(props.match.params.nome);

			if (data.length >= 1) {
				setCurso(data[0]);
			} else {
				Redirect404();
			}
		}
		result();
	}, [props.match.params.nome]);

	const Redirect404 = () => {
		return (
			<Redirect to="/404" />
		);
	}
	//filtrar e se não existir, redirecionar 404


	return (
		<div>
			<Navbar />

			<div>

			</div>


			<Generic
				idComponent="MainCurso"
				Title={curso.nameCurso}
				Text={curso.briefing}
				Button={["Saiba Mais!", ""]}
			/>

			<Generic idComponent="BasicInformation" footerText={props.match.params.nome} />

			{curso.propostaCurricular ? curso.propostaCurricular.map((item) => (
				<Generic idComponent="Text" key={Math.random()} Title={item.titilo} Text={item.descricao} DataType={item.titilo} />
			)) : ""}

			<Generic idComponent="ModuleTabs" Title="Conteúdo programático" Data={curso.modulos} DataType="" />



			<Generic idComponent="GuiaDoCurso" />

			<Generic idComponent="Valor" Data={curso.Valor} />

			<Generic idComponent="Form" isFullWidth />

			<Footer />
		</div>
	);
}

export default Webinar;
