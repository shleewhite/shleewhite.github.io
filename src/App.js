import React, { Component } from 'react';
import Nav from './common/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './common/Footer';
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav />
            <Route exact path="/" component={About}/>
            <Route path="/portfolio" component={Portfolio}/>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
