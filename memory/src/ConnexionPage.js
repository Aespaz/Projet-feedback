import React from 'react';
import './ConnexionPage.css';
//dans le code dessous sert à afficher la boite en haut à gauche Projet-feedback
function ConnexionPage() {
  return (
    /**le code dessous affiche les deux boites pour ce que j'aime et ce que je n'aime pas
     * il est relié au ConnexionPage.css dans le dossier src voila voila ^^
     * quand vous lancer en npm start vérifier bien que vous été dans le dossier memory... oui j'ai 
     * fais la bétise mdr ^^
     */
    <>

  <h1 className="box">Projet-feedback</h1>
   <div id="boxConnexion">
     <h1 className="text">Connexion:</h1>
     <input type="text" placeholder="Entrée votre Prénom" className='formulaireConnexion'></input>
     <input type="text" placeholder="Entrée votre mail" className='formulaireConnexion' id="formulaireMail"></input>
     <input type="text" placeholder="Entrée votre Mot de passe" className='formulaireConnexion'></input>
      <p className="text" id="txtPrénom">Prénom :</p>
      <p className="text" id="txtMail">Mail :</p>
      <p className="text" id="txtMDP">Mot de passe :</p>
    <div>
      <button id="JeMinscrit">Je m'inscrit</button>
    </div>
      <div>
        <button id="JeMeConnecteLien">Je me connecte</button>
      </div>

   </div>


</>
  )
}


export default ConnexionPage;