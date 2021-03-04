import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Nav';
import Generic from '../../components/Generic';
import Footer from '../../components/Footer';
import { BrowserView } from 'react-device-detect';
import { Redirect } from 'react-router-dom';
import { getProfessorFilter } from '../../services/api';

function Professor(props) {
	const [professor, setProfessor] = useState({
		id: 0,
		name: '',
		description: '',
		img_url: '',
		Slug: ''
	});

	useEffect(() => {
		const result = async () => {
			const data = await getProfessorFilter(props.match.params.nome);
			if (data.length >= 1) {
				setProfessor(data[0]);
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

	return (
		<div>
			<Navbar />
			<BrowserView viewClassName="header-desktop-fix" />

			<Generic idComponent="Curriculum" teacherName={professor.name} teacherResume={professor.description} teacherPicture={professor.img_url} />

			<Generic idComponent="Form" isFullWidth />

			<Footer />
		</div>
	);
}
export default Professor;
