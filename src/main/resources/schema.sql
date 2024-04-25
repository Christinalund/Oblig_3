CREATE TABLE Billett (
  id INTEGER AUTO_INCREMENT NOT NULL,
  film VARCHAR(225) NOT NULL,
  antall INTEGER NOT NULL,
  fornavn VARCHAR(225) NOT NULL,
  etternavn VARCHAR(225) NOT NULL,
  telefonnr VARCHAR(225) NOT NULL,
  epost VARCHAR(225) NOT NULL,
  PRIMARY KEY (id)
);


INSERT INTO Billett (id, film, antall, fornavn, etternavn, telefonnr, epost)
VALUES (1,'Barbie',3,'Anna','Smith','47333337','annis@gmail.com');

INSERT INTO Billett (id, film, antall, fornavn, etternavn, telefonnr, epost)
VALUES (2,'Titanic',2,'Henry','Jensen','47666666','henryjensen@gmail.com');

INSERT INTO Billett (id, film, antall, fornavn, etternavn, telefonnr, epost)
VALUES (3,'Me Before You',1,'Per','Hansen','98333337','perhansenn@gmail.com');





