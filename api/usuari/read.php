<?php
// Incloure l'arxiu de configuració amb les dades per realitzar la connexió
require_once('../config/config.php');
// Incloure classe usuari
require_once('usuari.php');

// Instanciar la classe usuari
$usuari = new Usuari($server, $bdd, $usuari, $passwd);

// Recollir paràmetres
// Si algun dels valors que es reben és incorrecte, retorna error
if ((!isset($_GET["id_usuari"]) || $_GET["id_usuari"] == '')) {
    echo "ERROR: Les dades no poden estar buides. Cal especificar un id_usuari";
}
// Si no, es guarden en un array
else {
    $dades_usuari = array(
        "id_usuari" => $_GET['id_usuari']
    );

    // Cridar el mètode de l'objecte per asignar els valors a les propietats
    $usuari->__setProps($dades_usuari);
    // Cridar el mètode per crear l'usuari
    $resultat = $usuari->read();
    echo json_encode($resultat);
}
?>