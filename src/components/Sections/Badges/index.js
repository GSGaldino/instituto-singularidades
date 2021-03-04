import React from 'react';
import { FaStar } from 'react-icons/fa'
import './styles.css';

function Badges(props) {
	function styles() {
		var strg = "";
		props.isFullWidth === true ? strg += '' : strg += 'container ';
		props.isMain === true ? strg += 'Main ' : strg += '';
		return strg;
	}

	return (
		<div>
			<section id="badges" className={styles()}>
				{props.Title ? <h2>{props.Title}</h2> : ""}
				{props.Text ? <p>{props.Text}</p> : ""}

				<div className="badgesContainer">
					<div className="badgesItem">
						<FaStar	className="icon"/>
						<h4>Corpo docente qualificado</h4>
						<p>Mais de 80% dos professores dos nossos cursos são mestres ou doutores. Além disso, nossos profissionais estão conectados e preparados para o uso de quaisquer tecnologias.</p>
					</div>
					<div className="badgesItem">
						<FaStar	className="icon"/>
						<h4>Excelência de ensino</h4>
<p>Somos reconhecidos nacionalmente pela formação inicial e continuada de professores e especialistas de educação. Nossa missão é contribuir e apoiar a capacitação dos professores e educadores.</p>
					</div>
					<div className="badgesItem">
					<FaStar	className="icon"/>
						<h4>Liderança</h4>
<p>Faculdade de Pedagogia reconhecida pela sua excelência por educadores, empregadores, alunos e ex-alunos e pelo MEC.</p>
					</div>
					<div className="badgesItem">
						<FaStar	className="icon"/>
						<h4>Compromisso</h4>
						<p>Nós nos comprometemos com o aprendizado dos alunos e a valorização da formação da pessoa. Nossa missão baseia-se no cultivo de espaços de aprendizagem para o desenvolvimento de pessoas éticas e comprometidas com a excelência na educação.</p>
					</div>

				</div>

				{props.footerText ? <p className="footerText">{props.footerText}</p> : ""}
			</section>
		</div>
	);
}

export default Badges;
