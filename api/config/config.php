<?php
// Permetre accés a altres dominis (CORS)
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
// Fitxer de configuració per fer les connexions a la base de dades
$server = "localhost";
$bdd = "db_hooktravel";
$usuari = "hooktravel";
$passwd = "d2xnu3cf";


?>