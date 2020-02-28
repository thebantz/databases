DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;


CREATE TABLE users (
  username_id INT AUTO_INCREMENT,
  username VARCHAR(15) NOT NULL,
  PRIMARY KEY(username_id)
);

CREATE TABLE roomnames (
  roomname_id INT AUTO_INCREMENT,
  roomname VARCHAR(10),
  PRIMARY KEY(roomname_id)
);

CREATE TABLE messages (
  msg_id INT AUTO_INCREMENT,
  msg_text VARCHAR(30) NOT NULL,
  username_id INT DEFAULT NULL,
  roomname_id INT DEFAULT NULL,
  PRIMARY KEY(msg_id),
  FOREIGN KEY(username_id) REFERENCES users(username_id),
  FOREIGN KEY(roomname_id) REFERENCES roomnames(roomname_id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

