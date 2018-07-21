import React from 'react';
import './Parking.css';

class Parking extends React.Component{
	render(){
		return (
			<div className="parking">
				<div className="parking-cover">
					<img src={this.props.parking.cover} alt={this.props.parking.name} />
				</div>
				<div className="parking-info">
					<strong>{this.props.parking.name}</strong>
					<p>{this.props.parking.city}, {this.props.parking.zip}</p>
				</div>
			</div>
		);
	}
}

export default Parking;