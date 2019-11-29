// server.js
var express = require('express')
var app = express()
//var router = express.Router()
var router = require('./routes/main')(app)
var cors = require('cors')

var http = require('http')
var path = require('path')
var bodyParser = require('body-parser')
var static = require('serve-static');
var cors = require('cors')


app.set('port', process.env.PORT || 8082)
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



var server = http.createServer(app).listen(app.get('port'), "0.0.0.0", function(){
    console.log('server start ... %s %s', server.address().address, server.address().port)
})
