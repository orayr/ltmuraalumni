var Images  = require('../models/images');
// var Classes  = require('../models/gallery');
// Wrap all the methods in an object

var image = {
    addNew:function(req, res, next){
       /* Users.findOne({UserId: req.body.UserId},function (err, data3) {
            if (err) return console.error(err);
            if (data3 == null) {
                Users.create({
                    UserName: req.body.UserName,
                    UserId: req.body.UserId,
                    Type: req.body.Type,
                    password: req.body.password
                }, function (err, data) {
                    if (err) return console.error(err);
                    res.send("איש הצוות נכנס למערכת");
                });
            }
            else
                res.send("איש צוות כבר קיים במערכת");

        });*/
    }
    
}

// Return the object
module.exports = image;