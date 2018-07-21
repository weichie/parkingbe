import React from 'react';
import './Header.css';

import SearchBar from '../SearchBar/SearchBar';

class Header extends React.Component{
	render(){
		return(
			<header>
				<div className="dark-filter"></div>
				<div className="container">
					<div className="menu">
						<div className="logo">
							<a href="/">ParkBe</a>
						</div>
						<nav className="main-menu">
							<a href="#!">Home</a>
							<a href="#!">Parkings</a>
							<a href="#!">About</a>
							<a href="#!">Contact</a>
						</nav>
					</div>
				</div>

				<div className="search-content">
					<SearchBar />
				</div>
			</header>
		);
	}
}

export default Header;