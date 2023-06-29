import React from "react";
import {BrowserRouter as Switch, Router, Route } from "react-router-dom"
import Home from './components/Home';
import HTMLDefinition from './components/HTMLDefinition';
import CSSDefinition from './components/CSSDefinition';
import NotFound from './components/NotFound';
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
    
  <Router>

<NavBar />

  </Router>
  
  </div>
  );
}

export default App;
