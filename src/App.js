import React, { Component } from 'react';
import Nav from './components/Nav';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Footer from './components/Footer';
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="pure-g">
            <Nav />
            <Route exact path="/" component={ Portfolio }/>
            <Route exact path="/resume" component={ Resume }/>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
