DROP DATABASE IF EXISTS moviesDB;

CREATE DATABASE moviesDB;

USE moviesDB;

CREATE TABLE movieList (
  id int NOT NULL AUTO_INCREMENT,
  title VARCHAR(100),
  PRIMARY KEY(id)
);

/*
  mysql -u root < schema.sql
*/