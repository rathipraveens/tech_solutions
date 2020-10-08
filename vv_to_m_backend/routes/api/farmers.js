var mongoose = require('mongoose');
var router = require('express').Router();
var Farmer = mongoose.model('Farmer'); 

router.post('/', function(req, res, next){
  var farmer = new Farmer();

  farmer.village_name = req.body.village_name;
  farmer.farmer_name = req.body.farmer_name;
  farmer.phone_number = req.body.phone_number;
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
         Farmer.find().exec()
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

module.exports = router;
