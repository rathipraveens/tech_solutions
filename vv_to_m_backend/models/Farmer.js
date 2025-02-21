var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var FarmerSchema = new mongoose.Schema({
  village_name: {type: String, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9\s+]+$/, 'is invalid']},  
  farmer_name: {type: String, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9\s+]+$/, 'is invalid']},
  phone_no : {type: Number, unique: true, required: [true, "can't be blank"], match: [/^[0-9]+$/, 'is invalid']} , 
  age : {type: Number, required: [true, "can't be blank"], match: [/^[0-9]+$/, 'is invalid']} ,
  gender : {type: String, required: [true, "can't be blank"], match: [/^[a-zA-Z]+$/, 'is invalid']} ,
  picture: String,
});

FarmerSchema.methods.toFarmerJSON = function(){
  return {
    village_name: this.village_name,
    farmer_name : this.farmer_name,
    phone_no : this.phone_no, 
    age : this.age,
    gender : this.gender,
    picture : this.picture
  };
};

FarmerSchema.plugin(uniqueValidator, {message: 'is already taken.'});

mongoose.model('Farmer', FarmerSchema, 'farmer');
