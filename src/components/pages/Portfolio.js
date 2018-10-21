import React, { Component } from 'react';

import wc_pic from '../../images/wanna_camp.png';
import ra_pic from '../../images/recent_articles2.png';
import cg_pic from '../../images/callout_box.png';
import ap_pic from '../../images/a11y_patterns.png';
import bb_pic from '../../images/button_builder.png';
import mp_pic from '../../images/marine_plastics.png';
import gs_pic from '../../images/game_share.png';

class Card extends Component {
	render() {
		return (
			<div className="pure-u-1 pure-u-md-1-3">
				<div className="card">
					{
						this.props.img !== null ? 
							<a aria-hidden="true" href={ this.props.live ? this.props.live : this.props.code }>
								<img alt="" className="card-img" src={ this.props.img }/>
							</a> : null
					}
					<h2 className="card-title">{ this.props.title }</h2>
					<div className="card-desc">
						{ this.props.children }
					</div>
					<div className="card-footer pure-g">
						{
							this.props.live ? 
								<a className="pure-u-1-2" href={ this.props.live }><span className="assistive-text">{this.props.title}</span>Live Site</a> : null
						}
						{
							this.props.code ? 
								<a className="pure-u-1-2" href={ this.props.code }><span className="assistive-text">{this.props.title}</span>Code</a> : null
						}
					</div>
				</div>
			</div>
		);
	}
}

class Portfolio extends Component {
	render() {
		return (
			<div className="pure-u-1">
				<div className="pure-g card-container">
					<Card
						title="Marine Plastics Monitor"
						img={ mp_pic }
						code="https://github.com/vincentwu96/MarinePlastics"
						live="https://marineplastics.herokuapp.com/"
					>
						<p>
							Led team of six people over two quarters to create a site for the Santa Cruz based 
							non-profit <a href="https://cleanoceansinternational.org/">Clean Oceans International</a>. 
							The site is a database for collecting information about the types and quantaties of marine 
							debris around the world. It is built with ReactJS, D3, MongoDB and uses the Google Maps API and Auth0.
						</p>
					</Card>
					<Card
						title="Game Share"
						img={ gs_pic }
						code="https://github.com/wyattades/GameShare"
						live="https://gameshare-app.herokuapp.com/"
					>
						<p>
							Was on a team of five people for one quarter that made a web-based tank game. Users can
							create their own games that are hosted on a server and can be shared with a link to others.
							Written in JavaScript with Socket.io, PixiJS, Phaser.io and Firebase as the database. I contributed
							mainly to the styling of the site and worked on the game editor.
						</p>
					</Card>
					<Card
						title="Accessibility Patterns"
						img={ ap_pic }
						live="https://www.lightningdesignsystem.com/accessibility/patterns/overview/"
					>
						<p>
							Main project for Salesforce accessibility internship. Involved researching best accessibility practices for
							dynamic web components and creating a best practices version working version of the component. Also wrote detailed
							documentation on how to make the component, what it is used for, and why the best practices should be followed.
						</p>
					</Card>
					<Card
						title="Wanna Camp"
						img={ wc_pic }
						code="https://github.com/shleewhite/wanna_camp"
					>
						<p>
							Made during CalHacks 3.0, uses Meteor.js and MongoDB to store campsites near UCSC 
							and return applicable campsites based on a form submitted by the user.
						</p>
					</Card>
					<Card 
						title="Recent Articles Plugin"
						img={ ra_pic }
						code="http://codepen.io/shleewhite/pen/BKpNYX"
					>
						<p>
							Made for <a href="http://news.ucsc.edu/" className="link">news.ucsc.edu</a> to keep users on 
							the site longer by showing the most recent articles posted at the end of each article. 
						</p>
					</Card>
					<Card
						title="Callout Box Generator"
						img={ cg_pic }
						code="https://codepen.io/shleewhite/pen/bpxxOB"
					>
						<p>
							Made for UCSC Relations to generate "callout boxes", a div with an image and text, within 
							articles published on <a href="http://news.ucsc.edu/" className="link">news.ucsc.edu</a>.
						</p>
					</Card>
					<Card
						title="Button Builder"
						img={ bb_pic }
						code="https://codepen.io/shleewhite/pen/mVxjdx"
					>
						<p>
							Made for <a href="https://urelations.ucsc.edu/">UCSC Relations</a> to generate uniform images that 
							can be used as buttons in email marketing.
						</p>
					</Card>
				</div>
			</div>
		);
	}
}

export default Portfolio;
