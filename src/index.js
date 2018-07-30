import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/Portfolio.css';
import './components/Resume.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
