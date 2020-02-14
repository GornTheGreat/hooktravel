<?php
// Incloure l'arxiu de configuració amb les dades per realitzar la connexió
require_once('../config/config.php');
// Incloure classe usuari
require_once('usuari.php');

// Instanciar la classe usuari
$usuari = new Usuari($server, $bdd, $usuari, $passwd);

// Recollir paràmetres
// Si algun dels valors que es reben és incorrecte, retorna error
if (!isset($_GET["nom_usuari"]) || $_GET["nom_usuari"] == '' || 
    !isset($_GET["contrasenya"]) || $_GET["contrasenya"] == '' ||
    !isset($_GET["correu"]) || $_GET["correu"] == '' ||
    !isset($_GET["nom"]) || $_GET["nom"] == '' ||
    !isset($_GET["cognom"]) || $_GET["cognom"] == '') {

    echo "ERROR: Les dades no poden estar buides";
}
// Si no, es guarden en un array
else {
    $dades_usuari = array(
        "nom_usuari" => $_GET["nom_usuari"],
        "contrasenya" => $_GET["contrasenya"],
        "correu" => $_GET["correu"],
        "nom" => $_GET["nom"],
        "cognom" => $_GET["cognom"]
    );

    // Cridar el mètode de l'objecte per asignar els valors a les propietats
    $usuari->__setProps($dades_usuari);
    // Cridar el mètode per crear l'usuari
    $usuari->create();
}
?>