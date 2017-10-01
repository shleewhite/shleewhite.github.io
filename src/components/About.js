import React, { Component } from 'react';
import image from '../images/me.jpg';
import './Components.css';

class About extends Component {
	render() {
		return(
			<main>
				<img src={image} alt="Lee smiling while sitting on the floor at a rock climbing gym" className="photo"></img>
				<div id="text-container">
					<p id="hello">Hello!</p>
					<p>I am not going to explain everything I have ever done right here (that would be impossible and most likely boring), but I will talk about what I'm interested in!</p>
					<p>I started coding in high school and have been hooked ever since. Even though I have mostly worked on HTML/CSS/JS web tools recently, I have experience coding C, Java, Python, and with Android development.</p>
					<p>Besides coding, I love climbing (Exhibit A: The only photo on this page), watching movies (and television... and weird youTube videos...), and taking the occasional break from life on the internet by going on hikes and generally being outside.</p>
				</div>
			</main>
		);
	}
}

export default About;
