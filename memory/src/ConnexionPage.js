import React from 'react';
import './ConnexionPage.css';
//dans le code dessous sert à afficher la boite en haut à gauche Projet-feedback
function ConnexionPage() {
  return (
    /**le code dessous affiche le formulaire de connexion avec le prenom, mail
     * et mot de passe 
     * */
    <>

  <h1 className="box">Projet-feedback</h1>
   <div id="boxConnexion">
     <h1 className="text">Connexion:</h1>
     <input type="text" placeholder="Entrez votre Prénom" className='formulaireConnexion'></input>
     <input type="text" placeholder="Entrez votre mail" className='formulaireConnexion' id="formulaireMail"></input>
     <input type="text" placeholder="Entrez votre Mot de passe" className='formulaireConnexion'></input>
      <p className="text" id="txtPrénom">Prénom :</p>
      <p className="text" id="txtMail">Mail :</p>
      <p className="text" id="txtMDP">Mot de passe :</p>
    <div>
      <button id="JeMinscrit">Je m'inscris</button>
    </div>
      <div> 
        <button id="JeMeConnecteLien">Je me connecte</button>
      </div>
   </div>


</>
  )
}


export default ConnexionPage;