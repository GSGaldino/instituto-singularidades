import React, { useEffect, useState } from 'react';

import Navbar from '../../components/Nav';
import Footer from '../../components/Footer';

import Generic from '../../components/Generic';
import { getCursos } from '../../services/api';

const Home = () => {

	const [cursos, setCursos] = useState([]);

	useEffect(() => {
		const result = async () => {
			const data = await getCursos();
			setCursos(data);
		}
		result();
	}, []);


	return (
		<div>
			<Navbar />
			<Generic
				idComponent="Main"
				Title="" isFullWidth isMain
				Button={["Quero mais informações!"]}
				MobileBackground="../img/Banners/BannerHomeMobile.webp"
				DesktopBackground="../img/Banners/BannerHomeDesktop.webp"
			
			/>

			<Generic
				idComponent="Text"
				Title="Conheça mais sobre o Singularidades"
				Text={[
					"Fomos fundados em 2001 para suprir as necessidades de formação de professores, gestores e especialistas em educação. Em 2010, fomos incorporados ao Instituto Península para ampliar e impactar as ações no âmbito da educação nacional. Desde então, oferecemos cursos de Graduação/Licenciatura, cursos de Pós-Graduação Lato Sensu, Extensão Universitária e Cursos Online. Somos reconhecidos como referência nacional para a formação inicial e continuada de professores e especialistas em educação."
				]}
			/>

			<Generic
				idComponent="Badges"
				footerText=''
			/>

			<Generic idComponent="Form" isFullWidth/>

			<Generic idComponent="SelectionCards" 
				Title="Nossos cursos"
				DataType="Curso"
				Data ={cursos}
			/>

			<Footer />
		</div>
	);
}

export default Home;
