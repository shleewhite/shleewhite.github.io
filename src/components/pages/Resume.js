import React, { Component } from 'react';

class ExpSection extends Component {
  render() {
    return (
      <div className="exp-section">
        <h3>{this.props.title}</h3>
        <h4>{this.props.location} — {this.props.duration}</h4>
        {this.props.children}
      </div>
    );
  }
}

class Resume extends Component {
  componentDidMount() {
    document.title = "Resume: Lee White"
  }

  render() {
    return (
      <main className="pure-u-1">
        <h1>Resume</h1>
        <p className="title">UX Engineer</p>
        <div className="resume-grid">
          <div className="resume-column">
            <h2>Experience</h2>
            <ExpSection
              title="UX Engineer, Accessibility, Salesforce"
              location="San Francisco, CA"
              duration="August 2018 - Present"
            >
              <p>
                Responsible for ensuring new UI’s work for all users, including prototyping
                complicated components, writing documentation on how to implement components,
                and researching new technologies and their accessibility impacts.
                Also contributed to the Salesforce Design System React project.
              </p>
            </ExpSection>
            <ExpSection
              title="Accessibility Intern, Salesforce"
              location="San Francisco, CA"
              duration="June - September 2017"
            >
              <p>
                Main project was Accessibility Patterns, a section of the Lightning Design System site
                that has documentation on how to correctly implement dynamic components with working
                examples and explanations as to why the guidelines are there.
              </p>
            </ExpSection>
            <ExpSection
              title="Web Migration Assistant, UCSC Relations"
              location="Santa Cruz, CA"
              duration="October 2015 - March 2018"
            >
              <p>
                Initially hired to migrate archived news articles from antiquated database to a new one.
                Expanded to write JavaScript tools for professors and marketers, sift through UCSC codebase
                to fix errors, and update websites.
              </p>
            </ExpSection>
          </div>
          <div className="resume-column">
            <h2>Education</h2>
            <h3>Computer Science, B.A.</h3>
            <p className="college">UC Santa Cruz, June 2018</p>
            <p><strong>Overall GPA:</strong> 3.68</p>
            <p><strong>Honors:</strong> University Honors, Cum Laude</p>
            <p><strong>Courses:</strong></p>
            <ul>
              <li>Intro to Software Design</li>
              <li>Software Design I, II</li>
              <li>User Experience</li>
              <li>Natural Language Processing</li>
            </ul>
            <h2>Skills</h2>
            <p>
              <strong>Web Development:</strong>
            </p>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>React</li>
              <li>Web Components</li>
              <li>Firebase, MongoDB</li>
            </ul>
            <p>
              <strong>Communication:</strong>
            </p>
            <ul>
              <li>Technical Writing</li>
              <li>Public Speaking</li>
            </ul>
          </div>
        </div>
      </main>
    );
  }
}

export default Resume;
