<?php
/**
 * CLASSE User (Utilisateur)
 * Permet de créer des utilisateurs qui vont représenter la personne
 * @author Labigna
 */
class User { 
    public string $email; // Email de l'utilisateur qui servira de pseudo
    public string $mdp;// Mot de passe
    public string $name;// Prénom de la personne
    public boolean $admin;// Pour savoir si l'utilisateur est administrateur
    public boolean $liked;// Pour savoir si l'utilisateur a déjà envoyé un commentaire positif
    public boolean $unliked;// Pour savoir si l'utilisateur a déjà envoyé un commentaire négatif

    /**
     * Construction de l'utilisateur, procédure obligatoire pour qu'il existe
     * Si l'utilisateur est admin, il faudra le renseigner mais il ne l'est pas par défaut
     * @param string $email Récupère l'adresse mail de l'utilisateur au format "adresse@email.com"
     * @param string $mdp Récupère le mot de passe de l'utilisateur
     * @param string $name Récupère l'adresse email de l'utilisateur
     * @param bool $liked, $unliked Permet de savoir si l'utilisateur a au moins saisi un commentaire positif (liked)
     * et un commentaire négatif (unliked). Lors de la création d'un utilisateur, il est certain qu'il n'a pas envoyé de message
     * donc liked et unliked sont faux par défaut
     * @return void
     *  */ 
    function __construct(string $email, string $mdp, string $name, 
    bool $liked = false, bool $unliked = false) {
        $this->email = $email;
        $this->mdp = $mdp;
        $this->name = $name;
        $this->liked = $liked;
        $this->unliked = $unliked;
    }
}
?>