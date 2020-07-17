import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from './Home';
import { About } from './About';
import { Timeline } from './Timeline';
import { Profile } from './Profile';
import Side from './Side';
import Intro from './components/Intro'






function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/timeline" component={Timeline} />
            <Route path="/intro" component={Intro} />
        </Switch>
        <Switch>
            <Route path="/profile" component={Profile} />
        </Switch>
        </Router>
        <Side />
      </React.Fragment>
  
    </div>
  );
}

export default App;
