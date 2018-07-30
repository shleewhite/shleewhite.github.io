import React, { Component } from 'react';

class ExpSection extends Component {
  render() {
    return (
      <div className="exp-section">
        <h3>{ this.props.title }</h3>
        <h4>{ this.props.location } — { this.props.duration }</h4>
        { this.props.children }
      </div>
    );
  }
}

class Resume extends Component {
  render() {
    return (
      <div className="pure-u-1 pure-g">
        <div className="pure-u-2-3">
          <div className="resume-section">
            <h2>Experience</h2>
            <ExpSection
              title="Accessibility Intern, Salesforce"
              location="San Francisco, CA"
              duration="June 2017 - September 2017"
            >
              <p>
                Made corrections to the Salesforce Lightning Design System documentation, created prototypes
                of components for other teams to demonstrate how to follow accessibility standards, and main project was
                the Accessility Patterns. Accessibility Patterns is a section of the Lightning Design System site 
                that has documentation on how to correctly implement dynamic components with working examples and 
                explanations as to why the guidelines are there.
              </p>
              <h5>Accomplishments</h5>
              <ul>
                <li>Learned the basics for using  VoiceOver, NVDA, and JAWS screen readers</li>
                <li>Finished 5 Accessibility Patterns</li>
              </ul>
            </ExpSection>
            <ExpSection
              title="Grader, UCSC Baskin School of Engineering"
              location="Santa Cruz, CA"
              duration="January 2018 - June 2018"
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
              <h5>Accomplishments</h5>
              <ul>
                <li>Built “Callout Box Builder” and “Button Builder” for UCSC web tools</li>
                <li>Added a JS plugin for articles published on news.ucsc.edu that showed recent articles published</li>
              </ul>
            </ExpSection>
            <ExpSection
              title="Engineering Intern, Originate"
              location="San Francisco, CA"
              duration="June 2015 - July 2015"
            >
              <p>
                Worked as a full stack ruby engineer on their web apps:
                made changes to the database, made aesthetic changes, and added responsive JavaScript.
              </p>
              <h5>Accomplishments</h5>
              <ul>
                <li>Developed code in JavaScript, Ruby on Rails structure, and learned JQuery</li>
                <li>Acquired new coding languages while working on projects</li>
              </ul>
            </ExpSection>
            <ExpSection
              title="Lab Assistant, MissionBit"
              location="San Francisco, CA"
              duration="February 2015 - May 2015"
            >
              <p>
                Helped students with their projects by problem solving and taught them to find errors in their code.
                Also worked on MissionBit projects and helped with classes when necessary.
              </p>
              <h5>Accomplishments</h5>
              <ul>
                <li>Co-organized a “mini-hackathon” for students: found sponsors, a location and judges, and spread the word to students</li>
                <li>Demonstrated usage of 3D printers and code to elementary school class</li>
              </ul>
            </ExpSection>
          </div>
        </div>
        <div className="pure-u-1-3 pure-g">
          <div className="resume-section">
            <div className="pure-u-1">
              <h2>Education</h2>
              <h5 className="college">University of California, Santa Cruz:</h5>
              <p>Computer Science B.A., Graduated June 2018</p>
              <ul className="grad-info">
                <li>Recieved University Honors and Cum Laude</li>
                <li>GPA: 3.68</li>
              </ul>
              <h5 className="college">Lowell High School, San Francisco:</h5>
              <p>Class of 2015</p>
              <h5 className="college">MissionBit:</h5>
              <p>Advanced Web Development Course, Fall 2014</p>
              <h5 className="college">Girls Who Code:</h5>
              <p>Club Member 2014-2015</p>
            </div>
            <div className="pure-u-1">
              <h2>Skills</h2>
              <h5>Technical</h5>
              <ul>
                <li>Proficient with JavaScript, HTML, CSS, Python</li>
                <li>Experience with C, Java</li>
              </ul>
              <h5>Courses</h5>
              <ul>
                <li>Intro to Software Design, Software Design I, II</li>
                <li>Mobile Applications</li>
                <li>User Experience</li>
                <li>Natural Language Processing</li>
              </ul>
              <h5>Leadership</h5>
              <ul>
                <li>Organize groups and delegate</li>
                <li>Plan Events</li>
                <li>Work Collaboratively</li>
              </ul>
            </div>
            <div className="pure-u-1">
              <h2>Interests</h2>
              <p>
                Watching movies obsessively, rock climbing, playing guitar, 
                anything science fiction, and exploring the outdoors.
              </p>
            </div>
          </div>
        </div>
        <div className="pure-u-1 ref">References Upon Request</div>
      </div>
    );
  }
}

export default Resume;
