-- Nome do banco: snetoVeiculosdb
DROP DATABASE snetoVeiculosdb;
CREATE DATABASE snetoVeiculosdb;
USE snetoVeiculosdb;

CREATE TABLE admin(

	nome VARCHAR(100), 
	sobrenome VARCHAR(100), 
	login VARCHAR(20) NOT NULL, 
	senha VARCHAR(100) NOT NULL,
	PRIMARY KEY (login),
	UNIQUE KEY (login)
);

-- Senha 123 para as duas
INSERT INTO admin(nome, sobrenome, login, senha) VALUES ('admin', 'adm', 'lua', '58a889687a01dbbcc326bb6eb5cb15c2');

CREATE TABLE combustivel(
	id INTEGER NOT NULL AUTO_INCREMENT,
	descricao TEXT NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO combustivel(descricao) VALUES ('Gasolina');
INSERT INTO combustivel(descricao) VALUES ('Flex');
INSERT INTO combustivel(descricao) VALUES ('Etanol');
INSERT INTO combustivel(descricao) VALUES ('Híbrido');
INSERT INTO combustivel(descricao) VALUES ('Diesel');

CREATE TABLE carro(
	id INTEGER NOT NULL AUTO_INCREMENT,
	marca VARCHAR(100) NOT NULL,
	modelo_versao VARCHAR(200) NOT NULL,
	ano_fabricacao VARCHAR(4) NOT NULL,
	ano_modelo VARCHAR(4) NOT NULL, 
	quilometragem real NOT NULL,
	combustivel_id INTEGER NOT NULL,
	cambio VARCHAR(1) NOT NULL,
	vendido BOOLEAN DEFAULT false,
	devolvido BOOLEAN DEFAULT false,
	renavam varchar(12),
	chassi varchar(17),
	fornecedor VARCHAR(14) NOT NULL,
	PRIMARY KEY (id), 
	CONSTRAINT CHECK (cambio='M' OR cambio='A')
);

ALTER TABLE carro ADD COLUMN observacoes TEXT;
ALTER TABLE carro ADD COLUMN valor FLOAT;
ALTER TABLE carro ADD COLUMN leiloado BOOLEAN;
ALTER TABLE carro ADD COLUMN gnv BOOLEAN;
Alter table carro ADD FOREIGN KEY(combustivel_id) REFERENCES combustivel(id);

INSERT INTO carro
	(marca, modelo_versao, ano_fabricacao, ano_modelo, quilometragem, combustivel_id, cambio, vendido, devolvido, renavam, chassi, leiloado, gnv, observacoes, fornecedor, valor)
VALUES
	('Fiat', 2, '2023', '2023', 1200, 1, 'A', false, false, '12345678912', 'a1b2n34hd65k98rt7', false, false, 'Carrão', '08440164548', 80000);

CREATE TABLE img_carro(
	id INTEGER NOT NULL AUTO_INCREMENT,
	id_carro INT(10) NOT NULL,
	img LONGTEXT NOT NULL,
	principal boolean default false,
	PRIMARY KEY (id), 
	FOREIGN KEY (id_carro) REFERENCES carro(id)
);

INSERT INTO img_carro
	(id_carro, img, principal)
VALUES(1, "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"
, 1);