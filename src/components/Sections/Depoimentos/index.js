import React from 'react';

import './styles.css';

function Depoimentos(props) {
	return (
		<div>
			<section id="depoimentos">
				{props.Title ? <h2>{props.Title}</h2> : ""}
				{props.Text ? <p>{props.Text}</p> : ""}

				<div className="scroll">
					<div className="card">
						<div className="flex-item">
							<img src="https://thispersondoesnotexist.com/image" alt="" />
						</div>
						<div className="flex-item">
							<h3>ullamcorper eget</h3>
							<p> Cras semper auctor neque vitae tempus quam pellentesque nec. </p>
						</div>
					</div>
					<div className="card">
						<div className="flex-item">
							<img src="https://thispersondoesnotexist.com/image" alt="" />
						</div>
						<div className="flex-item">
							<h3>ullamcorper eget</h3>
							<p> Cras semper auctor neque vitae tempus quam pellentesque nec. </p>
						</div>
					</div>
					<div className="card">
						<div className="flex-item">
							<img src="https://thispersondoesnotexist.com/image" alt="" />
						</div>
						<div className="flex-item">
							<h3>ullamcorper eget</h3>
							<p> Cras semper auctor neque vitae tempus quam pellentesque nec. </p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Depoimentos;
