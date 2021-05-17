import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUpForm';
import Products from './components/pages/Products';
import SignUpContainer from "./components/pages/SignUpContainer";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FileDownloader from "./components/pages/FileDownloader";
import Downloader from './components/pages/Downloader';
import Header from './components/pages/Header';



function App() {
  return (
   <>
   <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/services' component={Services} />
      <Route path='/products' component={Products} />
      <Route path='/signup' component={SignUp} />
      <Route path='/FileDownloader' component={FileDownloader} />
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
