var http = require('http'),
    fs = require('fs'),
    express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    url = require('url'),
 Docxtemplater=require('docxtemplater'),
    mongoose = require("mongoose");


/////////////
var JSZip = require('jszip');
var Docxtemplater = require('docxtemplater');

 var fs = require('fs');
 var path = require('path');
//var download = require('download-file');

var app = express();
var port = 5000;
var router  = express.Router();

// APP CONFIGURATION------------------------------------------
// use body parser to grab information from POST
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'certificate')));
app.use(express.static(path.join(__dirname,'/client/src/img/home')));
app.use(express.static(path.join(__dirname,'/client/src/img/gallery')));
app.use(express.static(path.join(__dirname,'/client/src/img/sites')));
app.use(express.static(path.join(__dirname,'/client/src/img/lessons')));

app.use(express.static(path.join(__dirname,'client/app/controllers')));
app.use(express.static(path.join(__dirname,'client/app/services')));
app.use(express.static(path.join(__dirname,'client/app/directives')));
app.use(express.static(path.join(__dirname, '/client')));
app.use(express.static(path.join(__dirname, '/server/controllers')));
app.use(express.static(path.join(__dirname,'/client/src/img/')));
app.use(express.static(path.join(__dirname,'client/app/views/pages/')));
app.use(express.static(path.join(__dirname,'client/src/js')));
app.use(express.static(path.join(__dirname,'client/src/css')));
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());

// configure app to handle CORS requests
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Orgin','*');
    res.setHeader('Access-Control-Allow-Method','GET,POST');
    res.setHeader('Access-Control-Allow-Headers','X-Request-With,content-type,Authorization');
    next();
});

//==================================--DB--====================================


var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
// we're connected! Create your schemas and models here
});

mongoose.connect("mongodb://tmuracollege:123456@ds119772.mlab.com:19772/tmuradb");

console.log("db connected!");

//=========================--ROUTES/API--====================================
//API ROUTES

var user = require('./server/controllers/user');
var image = require('./server/controllers/image');

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
router.get('/users', user.getAll);
router.get('/gallery', user.getAll);
router.get('/sites', user.getAll);
router.get('/lessons', user.getAll);

router.post('/login', user.getUser);
router.post('/changePassword', user.updatePassword);
router.post('/updateStaff',user.updateStaff);
router.post('/createStuff',user.createStuff);
router.post('/deleteUser',user.deleteUser);
router.post('/uploadimage', image.addNew);

app.use('/', router);
module.exports = router;

//=========================--START THE SERVER---=========================
app.listen(port);
console.log('Server listenning at localhost:'+port);



