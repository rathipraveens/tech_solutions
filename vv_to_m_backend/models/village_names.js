var mongoose = require('mongoose');

var VillageNamesSchema = new mongoose.Schema({
       village_names : [String]
});

VillageNamesSchema.methods.toVillageJSON = function(){
  return {
    village_names : this.village_names
  };
};

// VegitableSchema.plugin(uniqueValidator, {message: 'is already taken.'});

mongoose.model('Village_names', VillageNamesSchema, 'villages');