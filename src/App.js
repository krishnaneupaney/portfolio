import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUpForm';
import Products from './components/pages/Products';
import SignUpContainer from "./components/pages/SignUpContainer";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FileDownloader from "./components/pages/FileDownloader";
import Downloader from './components/pages/Downloader';
import Header from './components/pages/Header';
import Contact from './components/pages/Contact';
import About from './components/pages/About';



function App() {
  return (
   <>
   <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/products' component={Products} />
      <Route path='/contact' component={Contact} />
      <Route path='/resume' component={FileDownloader} />
        <MuiThemeProvider>
        <SignUpContainer />
        </MuiThemeProvider>
        <MuiThemeProvider>
        <FileDownloader />
       </MuiThemeProvider> 
      
    </Switch>
    </Router>
    </>
  )
}

export default App;
