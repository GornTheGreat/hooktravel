<?php

// Resposta en format JSON
header('Content-Type: application/json');
// Incloure l'arxiu de configuració amb les dades per realitzar la connexió
require_once('../config/config.php');
// Incloure classe FotoUsuari
require_once('fotoUsuari.php');
// Incloure classe FotoPint
require_once('fotoPint.php');

$id_usuari = isset($_POST['id_usuari']) ? $_POST['id_usuari'] : null;
$id_pint = isset($_POST['id_pint']) ? $_POST['id_pint'] : null;

// Dades de l'arxiu
$file_name = $_FILES['image']['name'];
$file_path = $_FILES['image']['tmp_name'];
$file_type = $_FILES['image']['type'];
$file_size = $_FILES['image']['size'];
$file_mime = mime_content_type($file_path);

$file_data = array(
    "name" => $file_name,
    "path" => $file_path,
    "type" => $file_type,
    "size" => $file_size,
    "mime" => $file_mime
);

// ***** VALIDACIONS D'IMATGES *****
// *** COMPROVAR TIPUS, EXTENSIÓ I MIDA MÀXIMA ***
// Tipus reals i extensions permeses
$allowed_mime_types = ['image/jpeg', 'image/png'];
$allowed_extensions = ['.jpg', '.jpeg', '.png'];
$error = "An error ocurred while processing your image: ";


// Si el tipus mime està permés
if (in_array($file_mime, $allowed_mime_types)) {
    // Extreure extensió de l'arxiu
    $file_ext = substr(strtolower($file_name), strrpos($file_name, "."), strlen($file_name));
    // Si la extensió està permesa
    if (in_array($file_ext, $allowed_extensions)) {
        // Si la mida està permesa
        if ($file_size <= 502144000) {
            if (isset($id_usuari)) {
                // Instanciar l'objecte corresponent
                $foto_usuari = new FotoUsuari($server, $bdd, $usuari, $passwd);
                $dades_foto_usuaris = array(
                    "id_usuari" => $id_usuari
                );
                // Fer saber al mètode per actualitzar fotos que es la foto de perfil d'un usuari
                $foto_usuari->__setTipusPropietari("id_usuari");
                // Passar-li l'id corresponent
                $foto_usuari->__setProps($dades_foto_usuaris);
                // Moure la imatge a un directori de la nostra elecció
                $foto_usuari->moveImage($file_path, $file_ext);
                // En funció de la operació que es vulgui realitzar es fa un insert o un update a la imatge
                if ($_POST['mode'] == 'insert') $foto_usuari->addImage();
                elseif ($_POST['mode'] == 'update') $foto_usuari->updateImage();
                // Recuperar el nom de la imatge amb un getter ja que es una propietat privada
                echo json_encode($foto_usuari->__getNomFoto());
            }
            elseif (isset($id_pint)) {
                $foto_pint = new FotoPint($server, $bdd, $usuari, $passwd);
                $dades_foto_pint = array(
                    "id_pint" => $id_pint
                );
                $foto_pint->__setProps($dades_foto_pint);
                $foto_pint->moveImage($file_path, $file_ext);
                $foto_pint->addImage();
            }
        }
        else {
            // Arxiu massa gran
            $errmsg = "The uploaded file is too big. You can upload files up to 2,5 MiB.";
            http_response_code(400);
            echo json_encode($error . $errmsg);
        }
    }
    else {
        // Extensió no permesa
        $errmsg = "The uploaded file extension is not supported. Accepted extensions are .jpg, .jpeg and .png.";
        http_response_code(400);
        echo json_encode($error . $errmsg);
    }
}
else {
    // Tipus d'arxiu no permés
    $errmsg = "This file type is not supported. Make sure your file is in jpeg or png format.";
    http_response_code(400);
    echo json_encode($error . $errmsg);
}

?>