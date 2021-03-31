<?php
//Connexion à la BDD
$pdo = 0;
try{
    $pdo = new PDO('mysql:host=localhost;dbname=Feedback', 'root', 'labi0907');
}
    catch(PDOException $e){
        echo $e->getMessage();
     } 
?>
