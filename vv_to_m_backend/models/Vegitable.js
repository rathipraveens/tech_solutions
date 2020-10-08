var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var VegQuanSchema = new mongoose.Schema({
  veg_name: {type: String, required: [true, "can't be blank"], match: [/^[a-zA-Z]+$/, 'is invalid'] }, 
  veg_quantity: {type: Number, required: [true, "can't be blank"], match: [/^[0-9]+$/, 'is invalid'] }
});

var VegitableSchema = new mongoose.Schema({
  veg_date: {type: Date, default: Date.now , required: [true, "can't be blank"]}, 
  village_name: {type: String, required: [true, "can't be blank"], match: [/^[a-zA-Z]+$/, 'is invalid']},
  farmer_name: {type: String, required: [true, "can't be blank"], match: [/^[a-zA-Z]+$/, 'is invalid']},
  phone_number : {type: Number, unique: true, required: [true, "can't be blank"], match: [/^[0-9]+$/, 'is invalid']} ,  
  vegitables : [VegQuanSchema]
});

VegitableSchema.methods.toVegitableJSON = function(){
  return {
  veg_date: this.veg_date ,
  village_name: this.village_name  ,
  farmer_name: this.farmer_name  ,
  phone_number : this.phone_number,
  vegitables : this.vegitables
  };
};

// VegitableSchema.plugin(uniqueValidator, {message: 'is already taken.'});

mongoose.model('Vegitable', VegitableSchema, 'vegitable');
