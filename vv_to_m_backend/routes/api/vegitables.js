var mongoose = require('mongoose');
const { debug } = require('request');
var router = require('express').Router();
var Vegitable = mongoose.model('Vegitable'); 
var Vegitable_names = mongoose.model('Vegitable_names'); 

router.post('/', function(req, res, next){
  var vegitable = new Vegitable();

  vegitable.veg_date ;
  vegitable.village_name = req.body.village_name;
  vegitable.farmer_name = req.body.farmer_name;
  vegitable.phone_number = req.body.phone_no;
  vegitable.vegitables = req.body.vegitables;
  console.log(`vegitable object is = ${vegitable.toVegitableJSON()} `);
  
  // have to see from here vegitables array is not getting saved
  vegitable.save().then(function(){
    return res.json({vegitable: vegitable.toVegitableJSON()});
  }).catch(next);
});

router.get('/list' , function(req, res, next) {
  console.log("In list method =================>");
  Promise.all([ ]).then(function(results){
     return Promise.all([
         Vegitable.find( { "vegitables": { $elemMatch: { vegitable_name: { $ne:  ""} } }  },
                                         { "vegitables" : 1, "veg_date" : 1,_id: 0 } ).sort({"veg_date" : -1}).exec()
    ]).then(function(results){
      var vegitable_list = results[0];
      return res.json({
        vegitable_list: vegitable_list.map(function(vegitable){
          return vegitable.toVegitableJSON();
        })
      });
    });
  }).catch(next);
});

router.get('/name_list' , function(req, res, next) {
  Promise.all([ ]).then(function(results){
     return Promise.all([
         Vegitable_names.find({ }, {"vegitables" : 1, "_id": 0}).exec()
    ]).then(function(results){
      var vegitable_list = results[0];
      return res.json({
        vegitable_list
     });
    });
  }).catch(next);
});

module.exports = router;
