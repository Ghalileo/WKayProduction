import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Albums from './pages/Albums';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './components/Nav/index'

const App = () => {
  return (
  <div className="App">
  <Router>
    <Navigation/>
    <Switch>
      <Route exact path="/" component={Home} ><Home/></Route>
      <Route exact path="/pages/About" component={About} ><About/></Route>
      <Route path="/pages/Albums" component={Albums} ><Albums/></Route>
    </Switch>
  </Router>
  </div>
  
  )
}

export default App;
