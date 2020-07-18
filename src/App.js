import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Side from './Side';
import { Home } from './Home';
import { About } from './About';
import { Timeline } from './Timeline';
import Intro from './components/Intro'

function App() {
  return (
    <div className="App">
      <React.Fragment>
      <HashRouter basename="/">
      <div>
        <Side />
        <Route exact path="/" component={Home} />
        <Route path="/intro" component={Intro} />
        <Route path="/about" component={About} />
        <Route path="/timeline" component={Timeline} />
      </div>
      </HashRouter>
      </React.Fragment>
  
    </div>
  );
}

export default App;
