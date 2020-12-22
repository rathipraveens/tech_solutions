village vegitables to market system
===================================

1. database work 
$$$$$$$$$$$$$$$$

a. use vv_to_m

Master data --->

b. 
db.villages.insert( {
"villages": ["Amarpur1", "Amarpur2"]
} )

c. 
db.farmer.insertMany( [
{"village_name":"Amarpur1","farmer_name": "Deendayal Singh1", "phone_no" : 9911465680 , "age" : 40, "gender" : "male" , "picture": "" },
{"village_name":"Amarpur1","farmer_name": "Deendayal Singh2", "phone_no" : 9911465681 , "age" : 41, "gender" : "female" , "picture": "" },
{"village_name":"Amarpur1","farmer_name": "Deendayal Singh3", "phone_no" : 9911465682 , "age" : 42, "gender" : "male" , "picture": "" },
{"village_name":"Amarpur1","farmer_name": "Deendayal Singh4", "phone_no" : 9911465683 , "age" : 43, "gender" : "female" , "picture": "" },
{"village_name":"Amarpur1","farmer_name": "Deendayal Singh5", "phone_no" : 9911465684 , "age" : 44, "gender" : "male" , "picture": "" },
{"village_name":"Amarpur2","farmer_name": "Deendayal Singh6", "phone_no" : 9911465685 , "age" : 45, "gender" : "female" , "picture": "" },
{"village_name":"Amarpur2","farmer_name": "Deendayal Singh7", "phone_no" : 9911465686 , "age" : 46, "gender" : "male" , "picture": "" },
{"village_name":"Amarpur2","farmer_name": "Deendayal Singh8", "phone_no" : 9911465687 , "age" : 47, "gender" : "female" , "picture": "" },
{"village_name":"Amarpur2","farmer_name": "Deendayal Singh9", "phone_no" : 9911465688 , "age" : 48, "gender" : "male" , "picture": "" },
{"village_name":"Amarpur2","farmer_name": "Deendayal Singh10", "phone_no" : 9911465689 , "age" : 49, "gender" : "female" , "picture":  "" }
] )

d.

db.vvetiables.insertMany( 
{"vegitables": ["Aaloo1, Gaubhi1", "Paalak1"] }
 )


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


2. Backend work ---
$$$$$$$$$$$$$$$
a. villages names 
http://localhost:3000/api/farmers/village_names -- GET ( done )

b. vegitable names 
http://localhost:3000/api/vegitables/name_list -- GET ( done )

c. farmers name 
http://localhost:3000/api/farmers/farmer_names -- GET ( done )
------------------------------------------------------------------------------------------------
d. add vegitable
http://localhost:3000/api/vegitables   -- POST  --  ( done )
{
    "village_name": "Amarpur2", 
   "farmer_name":  "Deendayal Singh8", 
   "phone_number" : 9911306513,
    "vegitables": [ { "veg_name" :"Aaloo1", "veg_quantity" : 10 }, { "veg_name" :"Gaubhi1", "veg_quantity" : 25 } ] 
}
 
e. vegitables list 
http://localhost:3000/api/vegitables/list  -- GET  ( done )

Note:- Below 2 sections are copy - paste of this section i.e. vegitable section , so below 2 sections may be left.
--------------------------------------------------------------------------------------------------

f. add farmer post server 
http://localhost:3000/api/farmers -- POST  -- ( done )

{  
    "village_name" : "Amarpur4",
    "farmer_name" : "Amar Singh 4",
    "phone_no" : 9911306512,
    "age": 53,
    "gender": "female",
    "picture" : " "  
}
	
g. farmers detailed list 
http://localhost:3000/api/farmers/list/   -- GET  ( done )
---------------------------------------------------------------------------------------------------
h. add transport 
http://localhost:3000/api/transports -- POST  -- date is not getting inserted 

{  " trans_date" :  "10-7-2020",  
  "vehicle_type":  "4ws" ,
  "vehicle_number" : "HR26AH3510" , 
  "driver_name" :  "Deenu" ,
  "amount_paid" :   0   }

i. transport list 
http://localhost:3000/api/transport/list  -- GET  -- still to build

	




