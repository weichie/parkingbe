import React from 'react';
import './ParkingList.css';

import Parking from '../Parking/Parking';

class ParkingList extends React.Component{
	render(){
		return(
			<div className="parking-list">
				{
					this.props.parkings.map(parking => {
						return <Parking parking={parking} />
					})
				}
			</div>
		);
	}
}

export default ParkingList;