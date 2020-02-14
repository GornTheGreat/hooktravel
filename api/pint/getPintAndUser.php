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



if (!isset($_GET['id_pint'])) echo "ERROR: Les dades no poden estar buides. S'ha de proporcionar un id d'usuari";
else {
    $dades_pint = array(
        "id_pint" => $_GET['id_pint']
    );

    // Cridar el mètode de l'objecte per asignar els valors a les propietats
    $pint->__setProps($dades_pint);
    // Cridar el mètode per crear l'usuari
    $result = $pint->getPintAndUser();

    echo json_encode($result);
}

?>