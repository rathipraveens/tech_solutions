var mongoose = require('mongoose');
var router = require('express').Router();
var Farmer = mongoose.model('Farmer'); 
var Village_names = mongoose.model('Village_names');

router.post('/', function(req, res, next){
  var farmer = new Farmer();

  farmer.village_name = req.body.village_name;
  farmer.farmer_name = req.body.farmer_name;
  farmer.phone_no = req.body.phone_no;
  farmer.age = req.body.age;
  farmer.gender = req.body.gender;
  farmer.picture = "";

  farmer.save().then(function(){
    return res.json({farmer: farmer.toFarmerJSON()});
  }).catch(next);
});


router.get('/list' , function(req, res, next) {
  Promise.all([ ]).then(function(results){
     return Promise.all([
         Farmer.find( { } , { "farmer_name":1 ,"village_name" : 1 ,"age" : 1 , "gender" : 1 , "phone_no":1, "_id": 0 } ).exec()
    ]).then(function(results){
      var farmers = results[0];
      return res.json({
        farmers: farmers.map(function(farmer){
          return farmer.toFarmerJSON();
        })
      });
    });
  }).catch(next);
});

router.get('/farmer_names' , function(req, res, next) {
  Promise.all([ ]).then(function(results){
     return Promise.all([
         Farmer.find( { } , { "farmer_name":1 ,"phone_no" : 1, "_id": 0 } ).exec()
    ]).then(function(results){
      var farmers = results[0];
      return res.json({
        farmers: farmers.map(function(farmer){
          return farmer.toFarmerJSON();
        })
      });
    });
  }).catch(next);
});

router.get('/village_names' , function(req, res, next) {
  Promise.all([ ]).then(function(results){
     return Promise.all([
           Village_names.find({}, {"villages" : 1, "_id": 0}).exec()
    ]).then(function(results){
      var villages = results[0];
      return res.json({
         villages 
      });
    });
  }).catch(next);
});

module.exports = router;
