import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Common.css';

class Nav extends Component {
	render() {
		return(
			<nav id="nav">
				<ul>
					<li id="name"><Link to="/">Lee White</Link></li>
					<li><Link to="/portfolio">Portfolio</Link></li>
				</ul>
			</nav>
		);
	}
}

export default Nav;
