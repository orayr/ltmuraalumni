var express = require('express');
var router = express.Router();
//var multer = require('multer');
var mongoose = require('mongoose');
 
//path and originalname are the fields stored in mongoDB
var imageSchema = mongoose.Schema({
 path: {
 type: String,
 required: true,
 trim: true
 },
 originalname: {
 type: String,
 required: true
 }
 
});
 
 
var Image = module.exports = mongoose.model('files', imageSchema);
 
router.getImages = function(callback, limit) {
 
 Image.find(callback).limit(limit);
}
 
 
router.getImageById = function(id, callback) {
  
 Image.findById(id, callback);
 
}
 
router.addImage = function(image, callback) {
 Image.create(image, callback);
}
 
 /*
// To get more info about 'multer'.. you can go through https://www.npmjs.com/package/multer..
var storage = multer.diskStorage({
 destination: function(req, file, cb) {
 cb(null, 'uploads/')
 },
 filename: function(req, file, cb) {
 cb(null, file.originalname);
 }
});
 
var upload = multer({
 storage: storage
});
 Image.createNewImage= function(req, res, next) {
        console.log("update staff ");
        Users.findOne({UserId: req.body.UserOriginalId},function (err, data1) {
            if (err) return console.error(err);
        Users.findOneAndUpdate({UserId: req.body.UserOriginalId}, {
            UserName: req.body.UserName,
            Type: req.body.Type

        }, function (err, data) {
            if (err) return console.error(err);
            console.log(req.body.UserOriginalId);
            console.log("update staff ");
            console.log("update staff ");
            console.log("update staff ");

            res.send("המשתמש עודכן");
        });});
    }
router.post('/uploadimage', upload.any(), function(req, res, next) {
 console.log("on upload image function");
 res.send(req.files);
 
/*req.files has the information regarding the file you are uploading...
from the total information, i am just using the path and the imageName to store in the mongo collection(table)
*/
/* var path = req.files[0].path;
 var imageName = req.files[0].originalname;
 
 var imagepath = {};
 imagepath['path'] = path;
 imagepath['originalname'] = imageName;
 
 //imagepath contains two objects, path and the imageName
 
 //we are passing two objects in the addImage method.. which is defined above..
 router.addImage(imagepath, function(err) {
 
 });
 
});*/
 
module.exports = router;