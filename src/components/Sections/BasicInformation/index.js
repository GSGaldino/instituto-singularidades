import React from 'react';
import { IoBusiness, IoCalendarOutline, IoHourglassOutline, IoTimerOutline } from 'react-icons/io5';

import './styles.css';

function BasicInformation(props) {
	return (
		<div id="basic-information">
			<div className="container">
				{props.basicInfo && props.basicInfo.map((item, index) => (
					<div key={index}>
						<div className="item">
							<div className="image">
								{item.icon === "clock" ? <IoTimerOutline /> : ""}
								{item.icon === "duration" ? <IoHourglassOutline /> : ""}
								{item.icon === "calendary" ? <IoCalendarOutline /> : ""}
								{item.icon === "build" ? <IoBusiness /> : ""}
							</div>
							<div className="text">
								{item.desc}
							</div>
						</div>
					</div>
				))}
			</div>
		</div >
	);
}

export default BasicInformation;
