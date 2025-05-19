create database gForWrestling;
use gForWrestling;
DROP DATABASE gForWrestling;
CREATE TABLE  usuario (
  id INT NOT NULL auto_increment,
  nome VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  senha VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE  shows (
  id INT NOT NULL auto_increment,
  nomeShow VARCHAR(45) NOT NULL,
  dtInicioLogo DATE NULL,
  dtFimLogo DATE NULL,
  fkUsuario INT NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_show_usuario
    FOREIGN KEY (fkUsuario)
    REFERENCES usuario (id)
);

CREATE TABLE  Wrestler (
  id INT NOT NULL auto_increment,
  nome VARCHAR(45) NULL,
  numDeReinados INT NOT NULL,
  tempoReinado INT NOT NULL,
  fkShows INT NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_Wrestler_show1 FOREIGN KEY (fkShows) REFERENCES shows (id)
);


select * from usuario;
insert into usuario (nome, email, senha)
	values ('123', '123', '123');
