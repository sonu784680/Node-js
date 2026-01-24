CREATE DATABASE GIFT;
CREATE DATABASE IF NOT EXISTS GIFT;
DROP DATABASE IF EXISTS MC;
USE GIFT;

CREATE TABLE STUDENT1(
id INT PRIMARY KEY,
NAME VARCHAR(18),
age INT NOT NULL
);

INSERT INTO STUDENT1 VALUES(1,"SONU", 26);
INSERT INTO STUDENT1 VALUES(2,"SOMU", 46);

SELECT * FROM STUDENT1;

SHOW TABLES;

CREATE DATABASE WEBBOCKET;
USE WEBBOCKET;

CREATE TABLE EMPLOYEE(
ID INT PRIMARY KEY,
NAME VARCHAR(10),
SALARY INT 
);

INSERT INTO EMPLOYEE
(ID,NAME,SALARY)
VALUES
(1,"ADAM",25000),
(2,"SONU",30000),
(3,"IIOI",350000);

SELECT *  FROM EMPLOYEE;

CREATE  TABLE TEMP1(
ID INT unique,
NAME VARCHAR(10)
);

INSERT INTO TEMP1 VALUES(101,"SONU");
INSERT INTO TEMP1 VALUES(101 ,"HHH");
SELECT * FROM TEMP1;

CREATE TABLE EMP1(
ID INT ,
SALARY INT DEFAULT 20000
);
INSERT INTO EMP1  (ID) VALUES(101);

select * FROM EMP1;

use gift;
create table mgh(
roolno int primary key,
name varchar(10),
mark int,
grade varchar(2),
city varchar(10)
);
select *from mgh;
insert into mgh 
(roolno,name,mark,grade,city)
values
(1,"sonu",78,"a","pune"),
(2,"son",89,"c","une"),
(3,"sou",88,"d","pne"),
(4,"snu",97,"b","pue"),
(5,"onu",98,"f","nue");
select * from mgh;

set sql_safe_updates =0;
select city, count(roolno)
from mgh
group by city
having max(mark)>90 ;

update mgh
set grade ="f"
where grade ="a";
update mgh
set mark =86
where roolno =1;

select * from mgh;

update mgh
set mark = mark+55;

delete from mgh
where mark>150;
select * from mgh;

create table dept(
id int primary key,
name varchar(50)
);
insert into dept
values
(101,"english"),
(102,"hindi");

select * from dept;
update dept
set id =103
where id = 102;
update dept
set id =102
where id = 101;


create table teacher(
id int primary key,
name varchar(60),
dept_id int,
foreign key (dept_id) references dept(id)
ON delete cascade
ON update cascade
);

insert into teacher
values
(101,"sonu",101),
(102,"chinu",102);

select * from teacher;

create table alt(
roolno int primary key,
name varchar(10),
mark int,
grade varchar(2),
city varchar(10)
);

insert into chinu
(roolno,name,mark,grade,city)
values
(1,"sonu",78,"a","pune"),
(2,"son",89,"c","une"),
(3,"sou",88,"d","pne"),
(4,"snu",97,"b","pue"),
(5,"onu",98,"f","nue");

alter table alt 
add column age int,
drop column age,
rename to chinu ;
truncate table chinu;

select * from chinu;
alter table chinu
change name full_name varchar(20);


create table  if not exists student (
id int primary key,
name varchar(50)
);

insert into student
values
(101,"english"),
(102,"hindi"),
(103,"math");
select * from student;

create table  course (
id int primary key,
name varchar(50)
);

insert into course
values
(101,"python"),
(102,"javascript"),
(104,"science");
select * from course;

select * from course
inner join course
left join course
right join student
on student.id = course.id;


select * from course
left join 
student
on student.id = course.id
 
 union
 select * from course as c
right join student
on student.id = c.id

