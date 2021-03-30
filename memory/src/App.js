import React from 'react';
import './App.css';
//dans le code dessous sert à afficher la boite en haut à gauche Projet-feedback
function App() {
  return (
    /**le code dessous affiche les deux boites pour ce que j'aime et ce que je n'aime pas
     * il est relié au App.css dans le dossier src voila voila ^^
     * quand vous lancer en npm start vérifier bien que vous été dans le dossier memory... oui j'ai 
     * fais la bétise mdr ^^
     */
    <>
  <h1 className="box">Projet-feedback</h1>
    <div className="box" id="boxJaime">

    </div>
  <div className="box" id="boxJaimePas">
    
  </div>
</>
  )
}

export default App;