<?php
/**
 * CLASSE USER (UTILISATEUR)
 * Permet de créer des utilisateurs qui vont représenter la personne
 * 
 */
class User { 
    public $email = ""; // Email de l'utilisateur qui servira de pseudo
    public $mdp = "";// Mot de passe
    public $name = "";// Prénom de la personne
    public $admin;// Pour savoir si l'utilisateur est administrateur
    public $liked;// Pour savoir si l'utilisateur a déjà envoyé un commentaire positif
    public $unliked;// Pour savoir si l'utilisateur a déjà envoyé un commentaire négatif

    // Construction de l'utilisateur, procédure obligatoire pour qu'il existe
    function __construct(string $email, string $mdp, string $name, bool $liked = false, bool $unliked = false) {
        $this->email = $email;
        $this->mdp = $mdp;
        $this->name = $name;
        $this->liked = $liked;
        $this->unliked = $unliked;
    }
}
?>