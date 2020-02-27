CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INT PRIMARY KEY AUTO_INCREMENT,
  msg VARCHAR (20) NOT NULL,
  users_id INT NOT NULL REFERENCES users(id),
  roomname_id INT NOT NULL REFERENCES roomnames(id)
);

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR (10) NOT NULL,
  msg_id INT NOT NULL REFERENCES messages(id),
  roomname_id INT NOT NULL REFERENCES roomnames(id)
);

CREATE TABLE roomnames (
  id INT PRIMARY KEY AUTO_INCREMENT,
  roomname VARCHAR (10) NOT NULL,
  users_id INT NOT NULL REFERENCES users(id),
  msg_id INT NOT NULL REFERENCES messages(id)
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

