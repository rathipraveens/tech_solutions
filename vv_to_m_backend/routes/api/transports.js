var mongoose = require('mongoose');
var router = require('express').Router();
var Transport = mongoose.model('Transport'); 

router.post('/', function(req, res, next){
  var transport = new Transport();

  transport.trans_date = req.body.trans_date;
  transport.vehicle_type = req.body.vehicle_type;
  transport.vehicle_number = req.body.vehicle_number;
  transport.driver_name = req.body.driver_name;
  transport.amount_paid = req.body.amount_paid;
  
  transport.save().then(function(){
    return res.json({transport: transport.toTransportJSON()});
  }).catch(next);
});

module.exports = router;
