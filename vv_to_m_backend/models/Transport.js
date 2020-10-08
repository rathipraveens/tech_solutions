var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var TransportSchema = new mongoose.Schema({
  trans_date: {type: Date, default: Date.now },  
  vehicle_type: {type: String, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid']},
  vehicle_number : {type: String, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid']}, 
  driver_name : {type: String, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid']} ,
  amount_paid : {type: Number, required: [true, "can't be blank"], match: [/^[0-9]+$/, 'is invalid']} 
});

TransportSchema.methods.toTransportJSON = function(){
  return {
  trans_date: this.trans_date,  
  vehicle_type: this.vehicle_type ,
  vehicle_number : this.vehicle_number , 
  driver_name :  this.driver_name ,
  amount_paid :  this.amount_paid 
  };
};

//Transport.plugin(uniqueValidator, {message: 'is already taken.'});

mongoose.model('Transport', TransportSchema, 'transport');
