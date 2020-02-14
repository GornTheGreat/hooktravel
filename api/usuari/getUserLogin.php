<?php
session_start();

// Incloure l'arxiu de configuració amb les dades per realitzar la connexió
require_once('../config/config.php');
// Incloure classe usuari
require_once('usuari.php');

// Instanciar la classe usuari
$usuari = new Usuari($server, $bdd, $usuari, $passwd);

// Recollir paràmetres
// Si algun dels valors que es reben és incorrecte, retorna error
if (!isset($_GET["nom_usuari"]) || $_GET["nom_usuari"] == '' || 
    !isset($_GET["contrasenya"]) || $_GET["contrasenya"] == '') {

    echo "ERROR: Les dades no poden estar buides";
}
// Si no, es guarden en un array
else {
    $dades_usuari = array(
        "nom_usuari" => $_GET["nom_usuari"]
    );

    // Cridar el mètode de l'objecte per asignar els valors a les propietats
    $usuari->__setProps($dades_usuari);
    // Cridar el mètode per crear l'usuari
    $dades = $usuari->getUserLogin();

    if (empty($dades)){
        $resposta = "Usuari malament";
        echo json_encode($resposta);
    }else if ($dades[0]["contrasenya"] == $_GET["contrasenya"]){
        
        $resposta = "OK";
        $user_id = $usuari->getUser()[0]["id_usuari"];
        $dadesr[] = $resposta;
        $dadesr[] = $user_id;
        echo json_encode($dadesr);

}else if($dades[0]["contrasenya"] != $_GET["contrasenya"]){
    $resposta = "Contrasenya malament";
}
    
}
?>