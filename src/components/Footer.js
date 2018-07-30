import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return(
			<footer className="pure-u-1-1">
				<ul className="pure-g footer-li">
					<li className="pure-u-1-6"><a href="http://www.github.com/shleewhite">Github</a></li>
					<li className="pure-u-1-6"><a href="http://codepen.io/shleewhite/">CodePen</a></li>
					<li className="pure-u-1-6"><a href="mailto:me@shleewhite.com">Email</a></li>
				</ul>
			</footer>
		);
	}
}

export default Footer;
