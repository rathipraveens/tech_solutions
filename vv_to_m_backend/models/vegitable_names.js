var mongoose = require('mongoose');

var VegitableNamesSchema = new mongoose.Schema({
       vegitable_names : [String]
});

VegitableNamesSchema.methods.toVegitableJSON = function(){
  return {
    vegitable_names : this.vegitable_names
  };
};

// VegitableSchema.plugin(uniqueValidator, {message: 'is already taken.'});

mongoose.model('Vegitable_names', VegitableNamesSchema, 'vegitables');
