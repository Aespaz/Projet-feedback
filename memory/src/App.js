import React from 'react';
import './App.css';
import ConnexionPage from './ConnexionPage';
import FeedbackPage from './FeedBackPage';
import { BrowserRouter as Router,Route } from 'react-router-dom';

//dans le code dessous sert à afficher la boite en haut à gauche Projet-feedback
function App() {
  return (
   
    <Router>
        <Route path="/" exact component={FeedbackPage}/>
        <Route path="/ConnexionPage" exact component={ConnexionPage}/>
    </Router>
  )
}
export default App
