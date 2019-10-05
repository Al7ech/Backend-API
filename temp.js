var express = require('express')
var app = express()
var router = require('./routes/main_')(app)
var http = require('http')
var bodyParser = require('body-parser')


app.set('port', 8081)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('server start ... %s %s', server.address().address, server.address().port)
})