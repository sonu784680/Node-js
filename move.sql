create database college;
use college;


create table student1(
rollno int primary key,
name varchar(50),
mark int  not null,
grade varchar(1),
city varchar(50)
);

insert into student1
(rollno,name,mark,grade,city)
values
(101,"anil",54,"c","pune"),
(102,"animal",87,"a","bhubaneswar"),
(103,"bimal",98,"b","delhi"),
(104,"sunil",69,"d","mumbai");

select name,mark from student1;
select *from student1 where mark>80;
select *from student1 where city =  "pune";
select * from 
student1
where mark>70
 limit 3;
 select *from  
 student1
 order by city asc;
 select *from student1 order by mark asc;
 select *from student1 order by mark desc
 limit 3;
select max(mark)
from student1;
select min(mark)
from student1;
select avg(mark)
from student1;
select count(mark)
from student1;
select sum(mark)
from student1;
select city ,avg(mark)
from student1
group by city
order by avg(mark);
select city ,count(rollno)
from student1
group by city
having max(mark)>50;