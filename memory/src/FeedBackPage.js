import React from 'react';

function FeedbackPage(){
    return (
          /**
     * le code dessous affiche les deux boites pour ce que j'aime et ce que je n'aime pas
     * il est relié au App.css dans le dossier src voila voila ^^
     * quand vous lancer en npm start vérifier bien que vous été dans le dossier memory... oui j'ai 
     * fais la bétise mdr ^^
     */ 
    <>
    <h1 className="box">Projet-feedback</h1>
      <div className="box" id="boxJaime">
          <h1 class="titre">Ce que j'ai aimé</h1>
      </div>
    <div className="box" id="boxJaimePas">
          <h1 class="titre">Ce que je n'ai pas aimé</h1>
    </div>
    <div className="box" id="boxMessageEnvoyer">
      <select id="inputSelectionJaime">
          <option value="valeur1">Ce que j'ai aimé</option>
          <option value="valeur2" selected>Ce que je n'ai pas aimé</option>
      </select>
      <input type="text" placeholder="Entrée votre message ici" id='formulaireMessage'></input>
      <button id="boutonEnvoyer">Envoyer</button>
      </div>
      </>
    )
}
export default FeedbackPage