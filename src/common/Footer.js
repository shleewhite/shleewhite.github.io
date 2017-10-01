import React, { Component } from 'react';
import './Common.css';

class Footer extends Component {
	render() {
		return(
			<footer id="footer">
				<ul>
					<li><a href="www.github.com/shleewhite">Github</a></li>
					<li><a href="http://codepen.io/shleewhite/">CodePen</a></li>
					<li><a href="mailto:me@shleewhite.com">Email</a></li>
				</ul>
			</footer>
		);
	}
}

export default Footer;
