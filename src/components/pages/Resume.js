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
        <div className="resume-section">
          <h2>Education</h2>
          <h3 className="college">University of California, Santa Cruz:</h3>
          <p>Computer Science B.A., Graduated June 2018</p>
          <ul className="grad-info">
            <li>Received University Honors and Cum Laude</li>
            <li>GPA: 3.68</li>
          </ul>
        </div>
        <div className="resume-section">
          <h2>Experience</h2>
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
            title="Grader, UCSC Baskin School of Engineering"
            location="Santa Cruz, CA"
            duration="January - June 2018"
          >
            <p>
              Graded on paper, exams, and programming assignments for CMPS 101: Abstract Data Types
              and CMPS 143: Natural Language Processing.
            </p>
          </ExpSection>
          <ExpSection
            title="Web Migration Assistant, UCSC Relations"
            location="Santa Cruz, CA"
            duration="October 2015 - March 2018"
          >
            <p>
              Hired to migrate archived news articles from antiquated database to new one, but finished.
              Write JavaScript tools for professors. Sift through UCSC codebase to fix errors, update websites,
              and combine redundant subsites.
            </p>
          </ExpSection>
          <ExpSection
            title="Engineering Intern, Originate"
            location="San Francisco, CA"
            duration="June - July 2015"
          >
            <p>
              Worked as a full stack ruby engineer on their web apps:
              made changes to the database, made aesthetic changes, and added responsive JavaScript.
            </p>
          </ExpSection>
        </div>
        <div className="resume-section">
          <h2>Skills</h2>
          <h3>Technical</h3>
          <ul>
            <li>Proficient with JavaScript, HTML, CSS, Python</li>
            <li>Experience with C, Java</li>
          </ul>
          <h3>Courses</h3>
          <ul>
            <li>Intro to Software Design, Software Design I, II</li>
            <li>Mobile Applications</li>
            <li>User Experience</li>
            <li>Natural Language Processing</li>
          </ul>
        </div>
        <div className="ref">References Upon Request</div>
      </main>
    );
  }
}

export default Resume;
