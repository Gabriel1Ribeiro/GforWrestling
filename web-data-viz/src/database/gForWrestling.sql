create database gForWrestling;
use gForWrestling;
-- DROP DATABASE gForWrestling;

CREATE TABLE usuario (
  id INT NOT NULL auto_increment,
  nome VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  senha VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
);

select * from usuario;

insert into usuario
values (1, 'Gabriel', '123@.', '123');

CREATE TABLE shows (
  id INT NOT NULL auto_increment,
  nomeShow VARCHAR(45) NOT NULL, -- Raw, SmackDown e Nxt
  fkUsuario INT,
  PRIMARY KEY (id),
  CONSTRAINT fk_show_usuario FOREIGN KEY (fkUsuario) REFERENCES usuario (id)
);


CREATE TABLE Titulo (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  fkShow INT,
  FOREIGN KEY (fkShow) REFERENCES shows(id)
);

CREATE TABLE Wrestler (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(45) NOT NULL,
  numDeReinados INT NOT NULL,
  tempoReinado DATE NOT NULL,
  descricao VARCHAR(200) NOT NULL,
  notaReinado INT,
  fkTitulo INT,
  FOREIGN KEY (fkTitulo) REFERENCES Titulo(id)
);

CREATE TABLE contadorBrand (
  id INT NOT NULL auto_increment,
  contador INT NOT NULL,
  fkShow INT,
  PRIMARY KEY (id),
  CONSTRAINT fk_contadorBrand_shows1 FOREIGN KEY (fkShow) REFERENCES shows (id)
);

insert into contadorBrand (contador, fkShow)
values (1, 1);
insert into contadorBrand (contador, fkShow)
values (1, 2);
insert into contadorBrand (contador, fkShow)
values (1, 3);

insert into shows (nomeShow)
values ("Raw"), ("SmackDown"), ("Nxt");


-- Títulos de Raw
INSERT INTO Titulo (nome, fkShow) VALUES
('World Heavyweight Championship', 1),
('Womens World Championship', 1),
('WWE Intercontinental Championship', 1),
('WWE Womens Intercontinental Championship', 1),
('World Tag Team Championship', 1),
('WWE Womens Tag Team Championship', 1);

-- Títulos de SmackDown
INSERT INTO Titulo (nome, fkShow) VALUES
('Undisputed WWE Championship', 2),
('WWE Womens Championship', 2),
('WWE United States Championship', 2),
('WWE Womens United States Championship', 2),
('WWE Tag Team Championship', 2);

-- Títulos de NXT
INSERT INTO Titulo (nome, fkShow) VALUES
('NXT Championship', 3),
('NXT Womens Championship', 3),
('NXT North American Championship', 3),
('NXT Womens North American Championship', 3);

-- Raw
INSERT INTO Wrestler (nome, numDeReinados, tempoReinado, descricao, notaReinado, fkTitulo) VALUES
('Jey Uso', 1, '2025-04-19', 'Jey Uso se destacou por sua conexão com o público e por sair da sombra de Roman Reigns, conquistando seu primeiro título mundial em 2025.', 8, 1),
('Iyo Sky', 2, '2025-03-03', 'Iyo Sky é conhecida por seu estilo aéreo único e domínio técnico no ringue, consolidando-se como uma das melhores da divisão feminina.', 8, 2),
('Dominik Mysterio', 1, '2025-04-20', 'Dominik Mysterio venceu uma luta fatal four-way no WrestleMania 41 e surpreendeu o público com sua evolução.', 7, 3),
('Lyra Valkyria', 1, '2025-01-13', 'Lyra venceu o torneio inaugural e se destacou pela técnica refinada e lutas de alta qualidade.', 7, 4),
('Kofi Kingston', 6, '2025-04-19', 'Veterano e carismático, conquistou mais um título de duplas com Xavier Woods no WrestleMania.', 8, 5),
('Xavier Woods', 5, '2025-04-19', 'Membro do The New Day, Woods segue consolidando seu legado nas duplas com Kofi Kingston.', 8, 5),
('Liv Morgan', 3, '2025-04-21', 'Liv conquistou o título de duplas com Raquel, sendo uma das faces mais populares da divisão feminina.', 7, 6),
('Raquel Rodriguez', 3, '2025-04-21', 'Raquel combina força com carisma e tornou-se multi-campeã de duplas ao lado de Liv.', 7, 6);


-- SmackDown
INSERT INTO Wrestler (nome, numDeReinados, tempoReinado, descricao, notaReinado, fkTitulo) VALUES
('John Cena', 14, '2025-04-20', 'John Cena conquistou seu 17º título mundial ao derrotar Cody Rhodes, quebrando um recorde histórico.', 9, 7),
('Tiffany Stratton', 1, '2025-01-03', 'Estreante na divisão principal, venceu o título ao usar o Money in the Bank, impressionando a todos.', 8, 8),
('Jacob Fatu', 1, '2025-04-19', 'Dominante e agressivo, Jacob conquistou o título dos EUA no WrestleMania 41.', 8, 9),
('Zelina Vega', 1, '2025-04-25', 'Zelina surpreendeu ao derrotar Chelsea Green para se tornar a primeira campeã do US Women\'s.', 7, 10),
('Angelo Dawkins', 2, '2025-03-14', 'Junto com Montez Ford, trouxe os títulos de volta aos Street Profits com carisma e energia.', 8, 11),
('Montez Ford', 2, '2025-03-14', 'Conhecido por sua agilidade, Ford reafirma o sucesso dos Street Profits nas duplas.', 8, 11);

-- NXT
INSERT INTO Wrestler (nome, numDeReinados, tempoReinado, descricao, notaReinado, fkTitulo) VALUES
('Oba Femi', 1, '2025-01-07', 'Oba Femi venceu em luta triple threat e se consolidou como nova força dominante no NXT.', 8, 12),
('Jacy Jayne', 1, '2025-05-27', 'Jayne derrotou Stephanie Vaquer e provou seu valor como principal nome feminino da brand.', 7, 13),
('Ethan Page', 1, '2025-05-27', 'Com grande técnica e carisma, Ethan venceu Ricky Saints pelo North American Title.', 7, 14),
('Sol Ruca', 1, '2025-04-19', 'Atleta ágil e inovadora, venceu o título feminino norte-americano em luta de escadas.', 7, 15);


select * from titulo;

SELECT 
    t.nome AS Titulo,
    s.nomeShow AS Shows,
    ROUND(AVG(w.notaReinado), 2) AS MediaNotaReinado
FROM Wrestler w
JOIN Titulo t ON w.fkTitulo = t.id
JOIN shows s ON t.fkShow = s.id
GROUP BY t.nome, s.nomeShow
ORDER BY MediaNotaReinado DESC;

-- select t.nome, 
SELECT 
  w.nome AS Campeao,
  t.nome AS Titulo,
  w.tempoReinado,
  DATEDIFF(CURDATE(), w.tempoReinado) AS diasComoCampeao
FROM Wrestler w
JOIN Titulo t ON w.fkTitulo = t.id;


SELECT 
	s.nomeShow,
	c.contador
	FROM shows s
	left JOIN contadorBrand c ON s.id = c.fkShow;
    
/* SELECT 
	s.nomeShow,
	c.contador
		FROM shows s
		JOIN contadorBrand c ON s.id = c.fkShow; */

-- Exclui a FK temporariamente
ALTER TABLE shows DROP CONSTRAINT fk_show_usuario;

-- Executa o truncate
TRUNCATE TABLE usuario;

-- Recria a FK
ALTER TABLE shows
ADD CONSTRAINT fk_show_usuario FOREIGN KEY (fkUsuario)
REFERENCES usuario(id);
