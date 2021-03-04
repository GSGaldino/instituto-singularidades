import React from 'react';

import './styles.css';

export default function Curriculum(props) {
	const teacherName = props.teacherName;
	const teacherResume = props.teacherResume;
	const teacherPicture = props.teacherPicture;

	return (
		<div>
			<div id="curriculum">
				<div className="item">
					<h2>{teacherName}</h2>
					<p>{teacherResume}</p>
					</div>
				<div className="item">
					<img className="image" src={teacherPicture} alt=""/>
				</div>
			</div>
		</div>
	);
}
