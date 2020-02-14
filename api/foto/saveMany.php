<?php
// Permetre accés a altres dominis (CORS)
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
// Resposta en format JSON
header('Content-Type: application/json');

// -- TEST --
$hash = $_GET['hash'];

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
$allowed_extensions = ['jpg', 'jpeg', 'png'];
$error = "An error ocurred while processing your image: ";


// Si el tipus mime està permés
if (in_array($file_mime, $allowed_mime_types)) {
    // Extreure extensió de l'arxiu
    $file_ext = substr(strtolower($file_name), strrpos($file_name, ".") + 1, strlen($file_name));
    // Si la extensió està permesa
    if (in_array($file_ext, $allowed_extensions)) {
        // Si la mida està permesa
        if ($file_size <= 2621440) {
            // Generem un nou nom per l'arxiu
            $salt = uniqid();
            $new_name = md5($hash);
            $new_name .= $salt;
            // Movem l'arxiu de lloc
            $uploads = "../../uploads/fotos/";
            move_uploaded_file($file_path, $uploads . $new_name . $file_ext);
            $tipo = mime_content_type($uploads.$new_name.$file_ext);
            echo $uploads.$new_name.$file_ext;
            echo "\n <br>";
            echo $tipo;
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