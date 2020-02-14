<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
// Incloure l'arxiu de configuració amb les dades per realitzar la connexió
require_once('../config/config.php');
// Incloure classe usuari
require_once('pint.php');

// Instanciar la classe usuari
$pint = new Pint($server, $bdd, $usuari, $passwd);
// Recollir paràmetres
// Si algun dels valors que es reben és incorrecte, retorna error



    // Cridar el mètode per crear l'usuari
    $result = $pint->getPints();

    echo json_encode($result);

?>