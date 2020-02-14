<?php
/**
 * Classe _____ per _________________________
 */
Class _____ {
    /**
	 * _____Descripció______
     * @var ___Tipus___
	 */
	private $_____;

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
        $this->taula = "___Nom taula___";
    }

    /**
     * Setter per emplenar les propietats de l'objecte
     * <p>
     * Mètode per assignar valors a les propietats
     * abans de fer alguna operació CRUD
     * 
     * @param ___NomParametre____ Un array que conté les
     * dades que es faran servir a la sentència SQL
     */
    public function __setProps($___DadesTaula____) {
        $this->__variable__ = isset($___DadesTaula____["__variable__"]) ? $___DadesTaula____["__variable__"] : null;
    }

    /**
     * __Nom Funcio___, ___Descripcio____
     * <p>
     * _____Descripció______
     * ________Llarga_______
     * <p>
     * <b>Avís: abans de cridar aquest mètode és necessari
     * executar el setter {@link __setProps}</b>
     */
    public function ______() {
        $sql = "_____SQL____";
        $stmt = $this->conn->prepare($sql);
    }
    
}

?>