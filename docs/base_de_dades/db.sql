-- crear taula d'usuaris
CREATE TABLE usuaris (
id_usuari INT AUTO_INCREMENT,
nom_usuari VARCHAR(200) NOT NULL UNIQUE,
contrasenya VARCHAR(200) NOT NULL,
correu VARCHAR(200) NOT NULL UNIQUE,
nom VARCHAR(200) NOT NULL,
cognom VARCHAR(200) NOT NULL,
descr VARCHAR(200),
CONSTRAINT pk_usuari PRIMARY KEY (id_usuari));

-- valor inicial del auto increment
ALTER TABLE usuaris AUTO_INCREMENT = 1;

-- crear taula de foto d'usuari
CREATE TABLE foto_usuaris (
    id_usuari INT,
    nom_foto VARCHAR(100),
    CONSTRAINT pk_foto PRIMARY KEY (id_usuari, nom_foto),
    CONSTRAINT fk_usuari_foto FOREIGN KEY (id_usuari) REFERENCES usuaris(id_usuari)
);

-- crear taula de localitzacions
CREATE TABLE pint (
id_pint INT AUTO_INCREMENT,
coordLat DOUBLE NOT NULL,
coordLong DOUBLE NOT NULL,
id_usuari INT NOT NULL,
nom VARCHAR(100) NOT NULL,
descr TEXT,
upvotes INT,
dia_pujada DATETIME DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT pk_pint PRIMARY KEY (id_pint),
CONSTRAINT fk_pint_usuari FOREIGN KEY (id_usuari) REFERENCES usuaris(id_usuari));

-- valor inicial del auto increment
ALTER TABLE pint AUTO_INCREMENT = 1;

-- crear taula de foto de localitzacions
CREATE TABLE foto_pint (
    id_pint INT,
    nom_foto VARCHAR(100),
    CONSTRAINT pk_foto PRIMARY KEY (id_pint, nom_foto),
    CONSTRAINT fk_pint_foto FOREIGN KEY (id_pint) REFERENCES pint(id_pint)
);


-- per esborrar tot
-- DROP TABLE foto_pint;
-- DROP TABLE foto_usuaris;
-- DROP TABLE fotos_comentaris;
-- DROP TABLE comentaris;
-- DROP TABLE pint;
-- DROP TABLE usuaris;
