import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Albums from './pages/Albums';
import Ruth from './pages/photoAlbums/Ruth';
import Aijha from './pages/photoAlbums/Aijha';
import Aria from './pages/photoAlbums/Aria';
import Nani from './pages/photoAlbums/Nani';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MotionLayoutProvider } from "react-motion-layout";
// import Navigation from './components/Nav/index'
import Footer from './components/Footer/index';

const App = () => {
  
  return (
  <div className="App">
  <Router>
    

    <Switch>
      <Route exact path="/" component={Home} ><Home/></Route>
      <Route exact path="/pages/About" component={About} ><About/></Route>
      <Route exact path="/pages/Albums" component={Albums} ><Albums/></Route>
      <Route exact path="/pages/photoAlbums/Ruth" component={Ruth} ><Ruth/></Route>
      <Route exact path="/pages/photoAlbums/Aijha" component={Aijha} ><Aijha/></Route>
      <Route exact path="/pages/photoAlbums/Aria" component={Aria} ><Aria/></Route>
      <Route exact path="/pages/photoAlbums/Nani" component={Nani} ><Nani/></Route>
    </Switch>
    
    <Footer/>
    
  </Router>
  </div>
  
  )
}

export default App;
