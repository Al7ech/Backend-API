// server.js
var express = require('express')
var app = express()
//var router = express.Router()
var router = require('./routes/main')(app)
var http = require('http')
var path = require('path')
var bodyParser = require('body-parser')
var static = require('serve-static');
var cors = require('cors')
// var mongoose = require('mongoose')
// var Client = require('mongodb').MongoClient
// var db
// var laptopColl
// Client.connect('mongodb://dev:dev@13.125.4.46:27017', function(err, database){
//     if(err){
//         console.error('Connection failed..', err)
//         return
//     } else{
        
//         db = database.db('test')
//         laptopColl = db.collection('laptop')
//     }

// })


// connect mongodb
// var db = mongoose.connection
// db.on('error', console.error)
// db.once('open', function(){
//     console.log("Connected to mongod server")
// })

// mongoose.connect('mongodb://dev:dev@13.125.4.46:27017/test')

app.use(cors())
app.set('port', process.env.PORT || 8080)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//app.use(static(path.join(__dirname, '/')))
//app.use(cookieparser())


var allowCrossDomain = function(req, res, next){
	res.header('Access-Control-Allow-Origin', "*")
	res.header('Access-Control-Allow-Methods', "GET,PUT,POST,DELETE")
	res.header('Access-Control-Allow-Headers', "Content-Type")
	next()
}

app.use(allowCrossDomain)


var server = http.createServer(app).listen(app.get('port'), function() {
    console.log('server start ... %s %s', server.address().address, server.address().port)
})
