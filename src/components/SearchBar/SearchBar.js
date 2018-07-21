import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
	render(){
		return (
			<div className="searchbar">
				<h1>Zoek een openbare &amp; betaalbare parking in Belgi&euml;</h1>
				<div className="input-group">
					<input type="text" placeholder="City or municipality" className="search-input" />
					<button className="btn btn-primary">Search</button>
				</div>
			</div>
		);
	}
}

export default SearchBar;