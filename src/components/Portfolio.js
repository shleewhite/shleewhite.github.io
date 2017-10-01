import React, { Component } from 'react';
import wc_pic from '../images/wanna_camp.png';
import ra_pic from '../images/recent_articles2.png';

class Portfolio extends Component {
	render() {
		return(
			<main id="portfolio-content">
				<div className="portfolio-entry" id="wanna_camp">
					<h2>Wanna Camp</h2>
					<img src={wc_pic} alt=""></img>
					<p>Made during CalHacks 3.0, uses Meteor.js and MongoDB to store campsites near UCSC and return applicable campsites based on a form submitted by the user. Code for the app can be found <a href="https://github.com/shleewhite/wanna_camp">here</a>.</p>
				</div>
				<div className="portfolio-entry" id="recentArticles">
					<h2>Recent Articles Plugin</h2>
					<img src={ra_pic} alt=""></img>
					<p>Made for <a href="http://news.ucsc.edu/" className="link">news.ucsc.edu</a> to keep users on the site longer by showing the most recent articles posted at the end of each article. The code can be found on my <a href="http://codepen.io/shleewhite/pen/BKpNYX" className="link">Codepen</a>.</p>
				</div>
				<div className="portfolio-entry">
					<h2>Callout Box Generator</h2>
					<p data-height="265" data-theme-id="0" data-slug-hash="bpxxOB" data-default-tab="result" data-user="shleewhite" data-embed-version="2" data-pen-title="Callout Box Builder" className="codepen">See the Pen <a href="https://codepen.io/shleewhite/pen/bpxxOB/">Callout Box Builder</a> by Lee White (<a href="https://codepen.io/shleewhite">@shleewhite</a>) on <a href="https://codepen.io">CodePen</a>.</p>
					<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
					<p>Made for UCSC Relations to generate "callout boxes", a div with an image and text, within an article published on news.ucsc.edu.</p>
				</div>
				<div className="portfolio-entry">
					<h2>Button Builder</h2>
					<p data-height="265" data-theme-id="0" data-slug-hash="mVxjdx" data-default-tab="result" data-user="shleewhite" data-embed-version="2" data-pen-title="Button Builder 2" className="codepen">See the Pen <a href="https://codepen.io/shleewhite/pen/mVxjdx/">Button Builder 2</a> by Lee White (<a href="https://codepen.io/shleewhite">@shleewhite</a>) on <a href="https://codepen.io">CodePen</a>.</p>
					<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
					<p>Made for UCSC Relations to generate uniform images that can be used as buttons in email marketing.</p>
				</div>
				
			</main>
		);
	}
}

export default Portfolio;
