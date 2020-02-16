<?php
/**
 * Classe usuari per tractar amb les dades dels usuaris
 */
Class Usuari {
    /**
	 * Per establir la connexió a la base de dades, es passa pel constructor
     * @var Object
	 */
	private $conn;
	/**
	 * La taula sobre la que es treballarà
     * @var String
 	 */
    private $taula;
    /**
	 * La taula de imatges d'usuaris
     * @var String
 	 */
	private $taula_foto_usuaris;

    // Camps de la taula
	/**
	 * L'id de l'usuari
	 * No pot estar buit
     * @var Int
 	 */
    private $id_usuari;
	/**
	 * El nom d'usuari
	 * No pot estar buit
     * @var String
	 */
    private $nom_usuari;
	/**
	 * La contrasenya de l'usuari
	 * No pot estar buit
     * @var String
	 */
    private $contrasenya;
	/**
	 * El correu amb el que es lligarà el compte
	 * No pot estar buit
     * @var String
	 */
    private $correu;
    /**
	 * El nom de la persona
	 * No pot estar buit
     * @var String
	 */
    private $nom;
    /**
	 * El cognom de la persona
	 * No pot estar buit
     * @var String
	 */
    private $cognom;
    /**
	 * La descripció de l'usuari
     * @var String
	 */
    private $descr;
    /**
	 * El nom de la foto de l'usuari
     * @var String
	 */
    private $foto;

    /**
	 * Constructor per establir la connexió i la taula
     * <p>
     * Hem de passar les dades necessàries per crear la
     * connexió. El nom de la taula ja està establert
     * 
     * @param String $server El nom del servidor on es troba la base de dades
     * @param String $bdd El nom de la base de dades
     * @param String $usuari El nom d'usuari amb accés a la base de dades
     * @param String $passwd La contrasenya per accedir a la base de dades
	 */
    public function __construct($server, $bdd, $usuari, $passwd) {
        $this->conn = new PDO("mysql:host=$server;dbname=$bdd", $usuari, $passwd);
        $this->conn->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
        $this->taula = "usuaris";
        $this->taula_foto_usuaris = "foto_usuaris";
    }

    /**
     * Setter per emplenar les propietats de l'objecte
     * <p>
     * Mètode per assignar valors a les propietats
     * abans de fer alguna operació CRUD
     * 
     * @param Array $dades_usuari Un array que conté les
     * dades que es faran servir a la sentència SQL
     */
    public function __setProps($dades_usuari) {
        $this->id_usuari = isset($dades_usuari["id_usuari"]) ? $dades_usuari["id_usuari"] : null;
        $this->nom_usuari = isset($dades_usuari["nom_usuari"]) ? $dades_usuari["nom_usuari"] : null;
        $this->contrasenya = isset($dades_usuari["contrasenya"]) ? $dades_usuari["contrasenya"] : null;
        $this->correu = isset($dades_usuari["correu"]) ? $dades_usuari["correu"] : null;
        $this->nom = isset($dades_usuari["nom"]) ? $dades_usuari["nom"] : null;
        $this->cognom = isset($dades_usuari["cognom"]) ? $dades_usuari["cognom"] : null;
        $this->descr = isset($dades_usuari["descr"]) ? $dades_usuari["descr"] : null;
    }

    /**
     * create, crea un nou usuari a la base de dades
     * <p>
     * Mètode per crear un nou usuari.
     * no necessita cap paràmetre, realitza la inserció
     * a partir del valor de les propietats de l'objecte
     * <p>
     * <b>Avís: abans de cridar aquest mètode és necessari
     * executar el setter {@link __setProps}</b>
     */
    public function create() {
        $sql = "INSERT INTO ".$this->taula."(nom_usuari, contrasenya, correu, nom, cognom)
				VALUES(:nom_usuari, :contrasenya, :correu, :nom, :cognom);";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(":nom_usuari", $this->nom_usuari);
        $stmt->bindParam(":contrasenya", $this->contrasenya);
        $stmt->bindParam(":correu", $this->correu);
        $stmt->bindParam(":nom", $this->nom);
        $stmt->bindParam(":cognom", $this->cognom);
        $stmt->execute();
    }
    
    /**
     * update, actualitza un usuari existent
     * <p>
     * Mètode per actualitzar les dades d'un usuari,
     * en base a les propietats existents a l'objecte.
     * La sentència sql es construeix afegint les propietats
     * que s'han definit a l'objecte. Si una propietat no està
     * definida el mètode interpretarà que no es vol actualitzar
     * <p>
     * <b>Avís: abans de cridar aquest mètode és necessari
     * executar el setter {@link __setProps}</b>
     */
	public function update() {
        // Sentència sql base
        $sql = "UPDATE ".$this->taula." ";
        // En aquesta variable s'anirà afegint la cadena corresponent als camps que es volen modificar
        $sql2 = "";
        
        // Creem un array de propietats
        $props = array();
        // Si les propietats dels camps que es poden canviar tenen algun valor,
        // s'afegeixen a l'array amb el seu nom i valor
        if (isset($this->contrasenya)) {
            $props["contrasenya"] = $this->contrasenya;
        }
		if (isset($this->correu)) {
			$props["correu"] = $this->correu;
        }
        
        // Per cada camp que es vulgui alterar, l'afegim al 'SET' de la query
        foreach ($props as $key => $value) {
            if (strlen($sql2) == 0) {
                $sql2 .= "SET ".$key." = :".$key;
            }
            else {
                $sql2 .= ", ".$key." = :".$key;
            }
        }
        
        // Acabem la sentència sql indicant on s'ha de fer el canvi
        $sql .= $sql2 . " WHERE id_usuari = :id_usuari;";
        $stmt = $this->conn->prepare($sql);
        
        // Passem els valors per substituïr al bindParam 
        foreach ($props as $key => $value) {
            $key = ":".$key;
            $stmt->bindParam($key, $value);
        }
        $stmt->bindParam(":id_usuari", $this->id_usuari);
        $stmt->execute();
        print_r($stmt);
    }
    
    /**
     * read, retorna dades d'un usuari
     * <p>
     * Mètode per llegir les dades d'un usuari
     * a partir del seu id_usuari
     * 
     * @return Array
     * Un array associatiu amb les dades de la persona
     * <p>
     * <b>Avís: abans de cridar aquest mètode és necessari
     * executar el setter {@link __setProps}</b>
     */
    public function read() {
        $sql = "SELECT u.nom_usuari, u.correu, u.nom, u.cognom, u.descr, fu.nom_foto
                FROM $this->taula AS u
                LEFT JOIN $this->taula_foto_usuaris AS fu
                ON u.id_usuari = fu.id_usuari
                WHERE u.id_usuari = :id_usuari";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(":id_usuari", $this->id_usuari);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        return $result[0];
    }

    /**
     * getUser, retorna l'id d'un usuari
     * <p>
     * Mètode per obtenir l'id_usuari d'una persona
     * a partir del seu correu
     * 
     * @return Array
     * <p>
     * <b>Avís: abans de cridar aquest mètode és necessari
     * executar el setter {@link __setProps}</b>
     */
    public function getUser() {
        $sql = "SELECT id_usuari
                FROM $this->taula
                WHERE nom_usuari = :nom_usuari;";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(":nom_usuari", $this->nom_usuari);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    }

    /**
     * getUserLogin, retorna el nom i contrasenya d'un usuari
     * <p>
     * Mètode per recuperar el nom d'usuari i
     * la contrasenya
     * 
     * @return Array
     * <p>
     * <b>Avís: abans de cridar aquest mètode és necessari
     * executar el setter {@link __setProps}</b>
     */
    public function getUserLogin() {
        $sql = "SELECT nom_usuari, contrasenya
                FROM $this->taula
                WHERE nom_usuari = :nom_usuari";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(":nom_usuari", $this->nom_usuari);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    }
}

?>