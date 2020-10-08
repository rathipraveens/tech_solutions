village vegitables to market system backend 
===========================================

1. after taking the code from github please run below commands to build , test , deploy & run steps --
$npm install
$npm test 
$npm start 

2. Overview of the system 

2.1. database work 
$$$$$$$$$$$$$$$$$$

a. use vv_to_m

Master data --->

b. 
db.farmer.insertMany( [
{"village_name":"Amarpur1","farmer_name": "Deendayal Singh1", "phone_no" : 9911465680 , "age" : 40, "gender" : "male" , "picture": "" }
] )

c. 
db.village_vetiable.insertMany( [
{"village_name":"Amarpur1","vegitables": ["Aaloo1, Gaubhi1", "Paalak1"] }
] )

Transactional data ( sample records while creating collections )--->

d.
db.transport.insert({ 
"tranportation_date":new Date(),"vehicle_type":"4-wheeler-s","vehicle_number":"HR-26-BP-3710","driver_name": "Sample","amount_paid" : 1000 }
)

e. 
db.vegitable.insert(
{"collection_date": new Date() ,"village_name":"Amarpur1", "farmer_name": "Deendayal Singh7", 
"vegitables": [ { "vegitable_name" :"Aaloo1", "quantity_kg" : 20 }, { "vegitable_name" :"Gaubhi1", "quantity_kg" : 30 } ] }
 )


2.2. Backend work ---
$$$$$$$$$$$$$$$
a. add farmer post server 
http://localhost:3000/api/farmers -- POST  -- blank space in name & village

{  "village_name" : "Dispur",
    "farmer_name" : "AmarSingh",
    "phone_number" : 9911465684,
    "age": 57,
    "gender": "Male",
    "picture" : " "  }
	
b. add vegitable
http://localhost:3000/api/vegitables   -- POST  -- vegitables are not getting inserted  

c. add transport 
http://localhost:3000/api/transports -- POST  -- date is not getting inserted 

{  " trans_date" :  "10-7-2020",  
  "vehicle_type":  "4ws" ,
  "vehicle_number" : "HR26AH3510" , 
  "driver_name" :  "Deenu" ,
  "amount_paid" :   0   }
	
d. farmers list 
http://localhost:3000/api/farmers/list   -- GET

e. vegitables list 
http://localhost:3000/api/vegitables/list    -- GET

