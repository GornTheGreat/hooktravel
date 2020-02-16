<?php
/**
 * Classe pint(punt d'interés) per tractar amb les dades dels
 * llocs que creen els usuaris
 */
Class Pint {
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
	
	// Camps de la taula
	/**
	 * L'id de la localització
	 * No pot estar buit
	 * @var Int
	 */
	private $id_pint;
	/**
	 * La longitud de la localització
	 * No pot estar buit
	 * @var Float
	 */
	private $coordLong;
	/**
	 * La latitud de la localització
	 * no pot estar buit
	 * @var Float
	 */
	private $coordLat;
	/**
	 * L'id de l'usuari que la ha creat
	 * No pot estar buit
	 * @var Int
	 */
	private $id_usuari;
	/**
	 * El nom de la localització
	 * No pot estar buit
	 * @var String
	 */
	private $nom;
	/**
	 * La descripció de la localització
	 * @var String
	 */
	private $descr;
	/**
	 * La puntuació de la localització
	 * @var Int
	 */
	private $upvotes;
	/**
	 * La data i hora que es va crear
	 * @var String
	 */
	private $dia_pujada;
	
	/**
	 * Constructor per establir la connexió i la taula
     * <p>
     * Hem de passar les dades necessàries per crear la
     * connexió. El nom de la taula ja està establert
     * 
     * @param String $server El nom del servidoron es troba la base de dades
     * @param String $bdd El nom de la base de dades
     * @param String $usuari El nom d'usuari amb accés a la base de dades
     * @param String $passwd La contrasenya per accedir a la base de dades
	 */
	public function __construct($server, $bdd, $usuari, $passwd) {
        $this->conn = new PDO("mysql:host=".$server.";dbname=".$bdd, $usuari, $passwd);
        $this->taula = "pint";
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
	public function __setProps($dades_pint) {
		$this->id_pint = isset($dades_pint["id_pint"]) ? $dades_pint["id_pint"] : null;
		$this->coordLong = isset($dades_pint["coordLong"]) ? $dades_pint["coordLong"] : null;
		$this->coordLat = isset($dades_pint["coordLat"]) ? $dades_pint["coordLat"] : null;
		$this->id_usuari = isset($dades_pint["id_usuari"]) ? $dades_pint["id_usuari"] : null;
		$this->nom = isset($dades_pint["nom"]) ? $dades_pint["nom"] : null;
		$this->descr = isset($dades_pint["descr"]) ? $dades_pint["descr"] : null;
		$this->upvotes = isset($dades_pint["upvotes"]) ? $dades_pint["upvotes"] : null;
		$this->dia_pujada = isset($dades_pint["dia_pujada"]) ? $dades_pint["dia_pujada"] : null;
	}

	/**
     * addPint, afegeix un nou pint a la base de dades
     * <p>
     * Mètode per inserir una nova localització creada
	 * per un usuari
     * <p>
     * <b>Avís: abans de cridar aquest mètode és necessari
     * executar el setter {@link __setProps}</b>
     */
	public function addPint() {
        $sql = "INSERT INTO ".$this->taula."(coordLong, coordLat, id_usuari, nom, descr)
				VALUES(:coordLong, :coordLat, :id_usuari, :nom, :descr);";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(":coordLong", $this->coordLong);
        $stmt->bindParam(":coordLat", $this->coordLat);
        $stmt->bindParam(":id_usuari", $this->id_usuari);
        $stmt->bindParam(":nom", $this->nom);
		$stmt->bindParam(":descr", $this->descr);
        $stmt->execute();
	}
	
	/**
     * getPints, retorna tots els pints
     * <p>
     * Mètode per obtenir tots els pints
	 * amb el nom i la descripció
	 * 
	 * @return Array
	 * Un array associatiu amb les dades dels pints
     * <p>
     * <b>Avís: abans de cridar aquest mètode és necessari
     * executar el setter {@link __setProps}</b>
     */
	public function getPints()
	{
		$sql = "SELECT coordLong, coordLat, id_pint, nom , descr
				FROM pint";

        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $result;
	}

	/**
     * getPintsAndUsers, retorna tots els pints amb dades addicionals
     * <p>
     * Mètode per obtenir tots els pints amb
	 * la data de pujada i el nom de l'usuari
     * 
     * @return Array
     * Un array associatiu amb els pints
     * <p>
     * <b>Avís: abans de cridar aquest mètode és necessari
     * executar el setter {@link __setProps}</b>
     */
	public function getPintsAndUsers()
	{
		$sql = "SELECT p.coordLong, p.coordLat, p.id_pint, p.nom, IF(LENGTH(p.descr)>300, CONCAT(SUBSTRING(p.descr,1,300),'...'), p.descr) as descr , p.dia_pujada, u.nom_usuari, f.nom_foto 
				FROM pint AS p 
				LEFT JOIN usuaris AS u 
				ON p.id_usuari = u.id_usuari 
				LEFT JOIN foto_pint AS f 
				ON f.id_pint = p.id_pint
				ORDER BY p.dia_pujada DESC";

        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $result;
	}


	public function getPintAndUser()
	{
		$sql = "SELECT p.coordLong, p.coordLat, p.id_pint, p.nom, p.descr, p.dia_pujada, u.nom_usuari, f.nom_foto 
		FROM pint AS p 
		LEFT JOIN usuaris AS u 
		ON p.id_usuari = u.id_usuari 
		LEFT JOIN foto_pint AS f 
		ON f.id_pint = p.id_pint
		WHERE p.id_pint = :id_pint
		";

		$stmt = $this->conn->prepare($sql);
		$stmt->bindParam(":id_pint", $this->id_pint);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $result[0];
	}


	/**
     * getLastPintByUser, retorna l'últim pint d'un usuari
     * <p>
     * Mètode per obtenir l'id de l'últim pint
	 * que ha creat un usuari
     * 
     * @return Array
     * <p>
     * <b>Avís: abans de cridar aquest mètode és necessari
     * executar el setter {@link __setProps}</b>
     */
	public function getLastPintByUser() {
		$sql = "SELECT id_pint
				FROM $this->taula
				WHERE id_usuari = :id_usuari
				ORDER BY id_pint DESC
				LIMIT 1";
		$stmt = $this->conn->prepare($sql);
		$stmt->bindParam("id_usuari", $this->id_usuari);
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		
		return $result[0];
	}

}

?>