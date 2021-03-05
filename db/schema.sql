drop database if exists burgers_db;
create database burgers_db;

USE burgers_db; 

create table burgers (
id integer auto_increment,
burger_name varchar (50),
devoured boolean default false,
primary key (id)
)
