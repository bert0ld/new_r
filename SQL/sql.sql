create database worker_s;

use worker_s;

create table workers (
id int(10) not null auto_increment,
Name varchar(30) not null,
Surname varchar(30) not null,
id_job int(10) NOT NULL,
Wage int(20) not null,
PRIMARY KEY (id));

create table job (
id_job int(10) not null auto_increment,
job varchar(30) not null,
primary key(id_job));

ALTER TABLE workers
ADD CONSTRAINT FOREIGN KEY (id_job) 
REFERENCES job (id_job) ON UPDATE RESTRICT ON DELETE RESTRICT;

insert into job values
	(1,'cleaner'),
	(2,'security'),
	(3,'director'),
	(4,'designer');

insert into workers values 
	(1,'Anton','Vanchin',1,10000),
	(2,'Kirill','Vanchin',2,15000),
	(3,'Egor','Vanchin',3,34000),
	(4,'Dmitry','Vanchin',4,18000);

select name, surname 
from workers
where wage<30000;

select name, surname, job
from workers
inner join job on job.id_job=workers.id_job
where wage<30000;

/* Задание повышенной сложности не получилось - возникли ошибки при создании внешнего ключа,
поэтому оно закомментировано и сделано до этой самой ошибки, которую не смог устранить.

create table boss_k (
	int id_k not null,
    int id_boss not null,
    primary key (id_k, id_boss)
    );

 alter table workers
 add column id_boss int(10) not null;

UPDATE workers SET id_boss = 3    WHERE name like "Kir%";
UPDATE workers SET id_boss = 3    WHERE name = 'Anton';
    
ALTER TABLE boss_k
 ADD FOREIGN KEY (id_boss) REFERENCES workers
 (id_boss) ON UPDATE RESTRICT ON DELETE RESTRICT,
 ADD FOREIGN KEY (id_k) REFERENCES workers (id) ON UPDATE RESTRICT ON DELETE RESTRICT; */