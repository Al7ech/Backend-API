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

app.use(cors())
app.set('port', process.env.PORT || 8080)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

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
