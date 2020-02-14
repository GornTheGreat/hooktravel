<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: POST, POST, PUT, DELETE');
// Incloure l'arxiu de configuració amb les dades per realitzar la connexió
require_once('../config/config.php');
// Incloure classe usuari
require_once('pint.php');

// Instanciar la classe usuari
$pint = new Pint($server, $bdd, $usuari, $passwd);
// Recollir paràmetres
// Si algun dels valors que es reben és incorrecte, retorna error
if ((!isset($_POST["lat"]) ||
     !isset($_POST["lng"]) ||
     !isset($_POST["nom"]) || 
     !isset($_POST["id_usuari"])) 
     && (
     $_POST["lat"] == "" ||
     $_POST["lng"] == "" || 
     $_POST["nom"] == "" || 
     $_POST["id_usuari"] == ""
    )) {
        
    echo "ERROR: Les dades no poden estar buides";
}
// Si no, es guarden en un array
else {
    
    $dades_pint = array(
        "coordLong" => $_POST["lng"],
        "coordLat" => $_POST["lat"],
        "id_usuari" => $_POST["id_usuari"],
        "nom" => $_POST["nom"],
        "descr" => $_POST["descr"],
    );
    
    // Cridar el mètode de l'objecte per asignar els valors a les propietats
    $pint->__setProps($dades_pint);
    // Cridar el mètode per crear el pint
    $pint->addPint();
}
?>