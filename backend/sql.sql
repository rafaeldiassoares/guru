CREATE TABLE usuario (
	id serial PRIMARY KEY,
	username VARCHAR ( 50 ) UNIQUE NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL	 
);

--insert into usuario (username, password, email) values ('Rafael', '123546', 'rafael@email.com')