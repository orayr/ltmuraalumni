
var mongoose = require('mongoose');

var schema = {
  originalname:String,
    id:String,
    Path:String
}

var Users = mongoose.model("Users", schema);

module.exports =  mongoose.model('user',{
    originalname:String,
    id:String,
    Path:String
});

