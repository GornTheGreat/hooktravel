<?php
require_once("./foto.php");

/**
 * Classe FotoPint per gestionar la pujada de imatges de perfil dels usuaris
 */
Class FotoPint extends Foto{
    /**
	 * Constructor per establir la connexió i la taula
     * <p>
     * Hem de passar les dades necessàries per crear la
     * connexió. El nom de la taula ja està establert
     * 
     * @param server El nom del servidor on es troba la base de dades
     * @param bdd El nom de la base de dades
     * @param usuari El nom d'usuari amb accés a la base de dades
     * @param passwd La contrasenya per accedir a la base de dades
	 */
    public function __construct($server, $bdd, $usuari, $passwd) {
        $this->taula = "foto_pint";
        $this->folder = "pint/";
        parent::__construct($server, $bdd, $usuari, $passwd);
    }

    /**
     * Setter per emplenar les propietats de l'objecte
     * <p>
     * Mètode per assignar valors a les propietats
     * abans de fer alguna operació CRUD
     * 
     * @param dades_foto_pint Un array que conté les
     * dades que es faran servir a la sentència SQL
     */
    public function __setProps($dades_foto_pint) {
        $this->id_propietari = isset($dades_foto_pint["id_pint"]) ? $dades_foto_pint["id_pint"] : null;
        $this->nom_foto = isset($dades_foto_pint["nom_foto"]) ? $dades_foto_pint["nom_foto"] : null;
    }

    /**
     * moveImage, per guardar la foto a una nova ruta
     * <p>
     * Mètode que genera un nom únic i
     * mou la imatge al directori corresponent
     * @param file_path La ruta temporal de l'arxiu
     * @param file_ext La extensió de l'arxiu
     * <p>
     * <b>Avís: abans de cridar aquest mètode és necessari
     * executar el setter {@link __setProps}</b>
     */
    public function moveImage($file_path, $file_ext) {
        parent::moveImage($file_path, $file_ext);
    }

    /**
     * addImage, guarda la referència de la imatge
     * <p>
     * Mètode per guardar a la base de dades la
     * referència a la imatge en el servidor. Es guarda
     * l'id del pint, usuari o comentari al que pertany
     * i el nou nom de la imatge
     */
    public function addImage() {
        parent::addImage();
    }


    
}

?>