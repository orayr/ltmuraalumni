/**
 this is a first basic crud functions
 */
var express = require("express");
var mongoose = require("mongoose");
var app = express();

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
// we're connected! Create your schemas and models here
});


mongoose.connect("mongodb://tmuracollege:tmura123@ds119772.mlab.com:19772/tmuradb");
console.log("db1 connected!");

var Schema = mongoose.Schema;


var imageSchema = new Schema({
    originalname:String,
    id:String,
    Path:String
}, {collection: 'imageSchema'})


var userSchema = new Schema({
    userId:String,
    FirstName: String,
    LastName: String,
}, {collection: 'User'});

var Image = mongoose.model('Image',imageSchema);
var User = mongoose.model('User', userSchema);

// the function createStaff- Without a list of classes !!!!!!!!!
var CreateStaff=function(userid,firstname,lastname,arr)//the Function create teacher   X
{
    User.findOne({FirstName: firstname},function (err, data) {
        if (err) return console.error(err);
        else if (data != null)
            console.log("the user " + firstname + " already exists");
        else {
            User.create({
                userId: staffid,
                FirstName: firstname,
                LastName: lastname,
            }, function (err, data) {
                if (err) return console.error(err);
                console.log("we create user " + firstname);
            });
        }
    });
}


var deleteStaff=function(userid)//the Function accepts a student's name and deletes it  V
{   User.findOne({UserId:userid}, function (err, data) {
        if (err) return console.error(err);
        else if(data==null)
        console.log("the user " + userid + " not  exists");
        else{
            User.remove({UserId:userid}, function(err) {
                if (!err) {
                    console.log("the user "+userid+ " delete from the userid list");
                }
                else {
                console.log("erro");
                }
            });
        }
    });
}