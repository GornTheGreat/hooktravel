-- crear base de dades
-- CREATE DATABASE hooktravel
-- CHARACTER SET utf8 -- conjunt de caràcters que fara servir la base de dades
-- COLLATE utf8_general_ci; -- regles referents a la ordenació de caràcters
-- crear un usuari
-- CREATE USER 'admin'@'localhost' IDENTIFIED BY 'root';
-- assignar privilegis a l'usuari en totes les taules de la base de dades
-- GRANT ALL PRIVILEGES ON hooktravel.* TO 'admin'@'localhost';
-- seleccionar la base de dades per treballar en ella
-- USE hooktravel;

-- crear taula d'usuaris
CREATE TABLE usuaris (
id_usuari INT AUTO_INCREMENT,
nom_usuari VARCHAR(200) NOT NULL UNIQUE,
contrasenya VARCHAR(200) NOT NULL,
correu VARCHAR(200) NOT NULL UNIQUE,
nom VARCHAR(200) NOT NULL,
cognom VARCHAR(200) NOT NULL,
id_foto INT,
descr VARCHAR(200),
CONSTRAINT pk_usuari PRIMARY KEY (id_usuari));

-- valor inicial del auto increment
ALTER TABLE usuaris AUTO_INCREMENT = 1;

-- crear taula de localitzacions
CREATE TABLE pint (
id_pint INT AUTO_INCREMENT,
coordLong FLOAT NOT NULL,
coordLat FLOAT NOT NULL,
id_usuari INT NOT NULL,
nom VARCHAR(100) NOT NULL,
descr TEXT,
foto LONGBLOB NOT NULL,
upvotes INT,
dia_pujada DATETIME DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT pk_pint PRIMARY KEY (id_pint),
CONSTRAINT fk_pint_usuari FOREIGN KEY (id_usuari) REFERENCES usuaris(id_usuari));


-- crear taula de comentaris
CREATE TABLE comentaris (
id_comentari INT AUTO_INCREMENT,
id_usuari INT NOT NULL,
id_pint INT NOT NULL,
comentari VARCHAR(400) NOT NULL,
upvotes INT,
dia_comentat DATETIME DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT pk_comentari PRIMARY KEY (id_comentari),
CONSTRAINT fk_comentari_usuari FOREIGN KEY (id_usuari) REFERENCES usuaris(id_usuari),
CONSTRAINT fk_comentari_pint FOREIGN KEY (id_pint) REFERENCES pint(id_pint));


-- crear taula de fotos
CREATE TABLE fotos (
id_foto INT AUTO_INCREMENT,
id_propietari INT,
tipus_propietari VARCHAR(1) NOT NULL,
ruta VARCHAR(50) NOT NULL,
tipus VARCHAR(50) NOT NULL,
CONSTRAINT pk_id_foto PRIMARY KEY (id_foto, id_propietari),
-- @PROBLEMA ASSOCIACIÓ POLIMÒRFICA
CONSTRAINT fk_propietari_foto FOREIGN KEY (id_propietari) REFERENCES comentaris(id_comentari));

-- para un auto-increment dependiente del valor de una de las claves primarias
DELIMITER $$ -- declarar un nuevo delimitador para separar el disparador del resto de código pudiendo usar el ';' dentro
CREATE TRIGGER fotos_auto_increment BEFORE INSERT ON fotos
FOR EACH ROW
BEGIN
	-- comprobar si existe un id de partida para el usuario que se va a insertar
	-- si existe se incrementa en 1 al máximo, si no se pone a 1
	DECLARE max_id_foto SMALLINT;
    SELECT MAX(id_foto) FROM fotos WHERE id_comentari = NEW.id_comentari INTO max_id_foto;
    SET NEW.id_foto = IF(ISNULL(max_id_foto), 1, max_id_foto + 1);
END$$
DELIMITER ; -- volver a declarar el delimitador por defecto

