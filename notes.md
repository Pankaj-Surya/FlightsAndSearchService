# Configuratation
1. Setup sever and dotenv 
2. Seting up seqelize
     -npx sequelize init => Created "config\config.json"
     -Go first inside src becoz we have config,json inside src 
###        npx sequelize db:create
3. 
     

=============================
Lec 3 : Implementing Models
==============================

Q1. What is differnce between Flight and airplane?
->  Flight - src --> dest airplane might be same or different



# DB Design 
# -----------------------  
  
 # FlightsSearch_DB  
  ## Tables
     1.Airplane
     2.Flight 
     3.Airport 
     4.City
 
### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
### Airplane -> id,model_number,capacity
### Flights ->  id,departure_city,des_city_id,airplane_id,departure,arrival,flight_num,airport_id 




## Association
  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport.





## Sequelize Command : Model

#### npx sequelize model:genrate --name City --attributes name:String 
=> create model and migration : extra attributes like id,created_at,updated_at

Note : it will not create table in DB   

Q. What Migration do?
- It will help to create incremental changes saved
- if we make changes in DB it will reflect changes
  in actual DB
- 


#### npx sequelize db:migrate 
=> make changes in database accordance with migration

#### npx sequelize db:migrate:undo


# Migration vs Model
- if we make any change on migration then it
will reflect changes in table in db
- if we make any changes in model  then it will reflect changes in javascript level

Q How to update migration 
- first undo then migrate
