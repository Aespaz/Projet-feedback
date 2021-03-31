<?php
/**
 * CLASSE Comment (Commentaire)
 * Commentaires positifs ou négatifs par semaine des utilisateurs
 * @author Labigna
 * 
 */
class Comment { 
    private string $message; // Commentaire de la personne
    private int $week;// Semaine à laquelle le commentaire a été passé, directement initialisé dans le constructeur à la date d'ahujourd'hui
    private boolean $type;// Type du commentaire si c'est un "j'ai aimé" ou "j'ai pas aimé"

    /**
     * Construction du commentaire avec attribution des paramètres, 
     * on n'a pas besoin de week qui sera automatiquement initialisé à la création
     * @param string $message Récupère le message propre pour l'insérer dans l'instance
     * @param bool $type Permet de savoir si c'est un commentaire FALSE "J'ai pas aimé", TRUE "J'ai aimé"
     * @return void
     *  */ 
    function __construct(string $message, bool $type) {
        $this->message = $message;
        $this->type = $type;
        $this->week = date("W"); 
    }

}
?>