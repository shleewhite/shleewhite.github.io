import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
	render() {
		return(
			<nav className="pure-u-1-1 pure-menu pure-menu-horizontal pure-g">
				<Link className="pure-menu-heading pure-u-4-5" to="/">Lee White</Link>
				<ul className="pure-menu-list pure-u-1-5">
					<li className="pure-menu-item" id="name"><Link className="pure-menu-link" to="/">Portfolio</Link></li>
					<li className="pure-menu-item" id="name"><Link className="pure-menu-link" to="/resume">Resume</Link></li>
				</ul>
			</nav>
		);
	}
}

export default Nav;
