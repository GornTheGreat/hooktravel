<?php
// Incloure l'arxiu de configuració amb les dades per realitzar la connexió
require_once('../config/config.php');
// Incloure classe usuari
require_once('usuari.php');

// Instanciar la classe usuari
$usuari = new Usuari($server, $bdd, $usuari, $passwd);

// Recollir paràmetres
// Si algun dels valors que es reben és incorrecte, retorna error
if ((!isset($_POST["id_usuari"]) || $_POST["id_usuari"] == '' || $_POST["id_usuari"] == 'undefined') ||
    (!isset($_POST["contrasenya"]) || $_POST["contrasenya"] == '') &&
    (!isset($_POST["correu"]) || $_POST["correu"] == '') && 
    (!isset($_POST["foto"]) || $_POST["foto"] == '') &&
    (!isset($_POST["descr"]) || $_POST["descr"] == '')) {
        
    http_response_code(400);
    echo "ERROR: Les dades no poden estar buides";
}
// Si no, es guarden en un array
else {
    $dades_usuari = array(
        "id_usuari" => $_POST["id_usuari"],
        "contrasenya" => isset($_POST["contrasenya"]) ? $_POST["contrasenya"] : null,
        "correu" => isset($_POST["correu"]) ? $_POST["correu"] : null,
        "foto" => isset($_POST["foto"]) ? $_POST["foto"] : null,
        "descr" => isset($_POST["descr"]) ? $_POST["descr"] : null,
    );

    // Cridar el mètode de l'objecte per asignar els valors a les propietats
    $usuari->__setProps($dades_usuari);
    // Cridar el mètode per crear l'usuari
    $usuari->update();
}
?>