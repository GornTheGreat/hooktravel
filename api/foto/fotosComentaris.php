<?php
/**
 * Classe FotoComentaris per gestionar la pujada de imatges
 */
Class FotoComentaris {
    /**
	 * L'identificador del comentari al que pertany la foto
     * @var Int
	 */
    private $id_comentari;
    /**
	 * El nom de la foto
     * @var String
	 */
	private $nom_foto;

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
        $this->conn = new PDO("mysql:host=".$server.";dbname=".$bdd, $usuari, $passwd);
        $this->taula = "fotos_comentaris";
    }

    /**
     * Setter per emplenar les propietats de l'objecte
     * <p>
     * Mètode per assignar valors a les propietats
     * abans de fer alguna operació CRUD
     * 
     * @param dades_fotos_comentaris Un array que conté les
     * dades que es faran servir a la sentència SQL
     */
    public function __setProps($dades_fotos_comentaris) {
        $this->id_comentari = isset($dades_fotos_comentaris["id_comentari"]) ? $dades_fotos_comentaris["id_comentari"] : null;
        $this->nom_foto = isset($dades_fotos_comentaris["nom_foto"]) ? $dades_fotos_comentaris["nom_foto"] : null;
    }

    /**
     * moveImage, per guardar la foto a una nova ruta
     * <p>
     * Mètode que genera un nom únic i
     * mou la imatge al directori corresponent
     * <p>
     * <b>Avís: abans de cridar aquest mètode és necessari
     * executar el setter {@link __setProps}</b>
     */
    public function moveImage() {
        
    }
    
}

?>