import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
	render(){
		return (
			<div className="searchbar">
				<h1>Zoek een openbare &amp; betaalbare parking in Belgi&euml;</h1>
				<input type="text" placeholder="City or municipality" className="search-input" />
			</div>
		);
	}
}

export default SearchBar;