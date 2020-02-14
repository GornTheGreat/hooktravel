<?php
/**
 * Classe Foto per definir les propietats compartides de les classes de fotos addicionals
 */
Class Foto {
    /**
	 * Per establir la connexió a la base de dades, es passa pel constructor
     * @var Object
	 */
	protected $conn;
	/**
	 * La taula sobre la que es treballarà
     * @var String
     */
    protected $taula;
    /**
	 * La ruta base on es guarden les imatges
     * @var String
	 */
    protected $upload = "../../uploads/fotos/";
    /**
	 * La carpeta on es guarda cada foto
     * @var String
	 */
    protected $folder;

    // Camps de la taula
    /**
	 * L'identificador de la taula a la que pertany la foto
     * @var Int
	 */
    protected $id_propietari;
    /**
	 * Definieix si s'id es de pint, usuari o comentari
     * @var String
	 */
    protected $tipus_propietari;
    /**
	 * El nom de la foto
     * @var String
	 */
	protected $nom_foto;

    /**
	 * Constructor per establir la connexió i la taula
     * <p>
     * Hem de passar les dades necessàries per crear la
     * connexió.
     * 
     * @param server El nom del servidor on es troba la base de dades
     * @param bdd El nom de la base de dades
     * @param usuari El nom d'usuari amb accés a la base de dades
     * @param passwd La contrasenya per accedir a la base de dades
     * @param taula La taula sobre la que es treballarà
     * @param folder La carpeta específica de cada foto
	 */
    protected function __construct($server, $bdd, $usuari, $passwd) {
        $this->conn = new PDO("mysql:host=".$server.";dbname=".$bdd, $usuari, $passwd);
    }

    public function __getNomFoto() {
        return $this->nom_foto;
    }

    public function __setTipusPropietari($tipus) {
        $this->tipus_propietari = $tipus;
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
    protected function moveImage($file_path, $file_ext) {
        // Generem un nou nom per l'arxiu
        $salt = uniqid();
        $new_name = md5($this->id_propietari);
        $new_name .= $salt;
        // Movem l'arxiu de lloc
        move_uploaded_file($file_path, $this->upload . $this->folder . $new_name . $file_ext);
        // Guardem el nom de la foto
        $this->nom_foto = $new_name . $file_ext;
    }

    /**
     * addImage, guarda la referència de la imatge
     * <p>
     * Mètode per guardar a la base de dades la
     * referència a la imatge en el servidor. Es guarda
     * l'id del pint, usuari o comentari al que pertany
     * i el nou nom de la imatge
     */
    protected function addImage() {
        $sql = "INSERT INTO $this->taula
				VALUES(:id_propietari, :nom_foto);";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(":id_propietari", $this->id_propietari);
        $stmt->bindParam(":nom_foto", $this->nom_foto);
        $stmt->execute();
    }

    /**
     * updateImage, actualitza la imatge 
     * <p>
     * Mètode per actualitzar la imatge la
     * referència a la imatge en el servidor.
     */
    protected function updateImage() {
        $sql = "UPDATE $this->taula
				SET nom_foto = :nom_foto
                WHERE $this->tipus_propietari = :id_propietari";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(":nom_foto", $this->nom_foto);
        $stmt->bindParam(":id_propietari", $this->id_propietari);
        $stmt->execute();
    }
}

?>