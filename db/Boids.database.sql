CREATE DATABASE Boids;

USE Boids;

CREATE TABLE Users (
    id int NOT NULL UNIQUE AUTO_INCREMENT,
    firstname varchar(30) NOT NULL,
    lastname varchar(30) NOT NULL,
    email varchar(255) UNIQUE NOT NULL,
    password varchar(255) NOT NULL,
    birthDate Date,
    longitude int,
    latitude int,
    heighAccuracy int,
    updatedAt Date,
    createdAt Date,
    PRIMARY KEY (id)
);

CREATE TABLE Chat_Servers (
    id int NOT NULL UNIQUE AUTO_INCREMENT,
    Chat_Server_Leader_id int NOT NULL,
    name varchar(50) NOT NULL,
    createdAt DATE,
    PRIMARY KEY (id)
);