// routes/main.js
var express = require('express')
var router = require('express').Router()
var Client = require('mongodb').MongoClient
var path = require('path')
var static = require('serve-static');
var cors = require('cors')

var smartphoneRouter = require('./smartphone')
var tabletRouter = require('./tablet')
var smartwatchRouter = require('./smartwatch')

var digitalcameraRouter = require('./digitalcamera')
var dslrRouter = require('./dslr')
var actioncameraRouter = require('./actioncamera')

var kimchirefrigeratorRouter = require('./kimchirefrigerator')
var refrigeratorRouter = require('./refrigerator')
var electronicriceRouter = require('./electronicrice')
var inductionRouter = require('./induction')
var electronicRouter = require('./electronic')
var ovenRouter = require('./oven')
var electronicportRouter = require('./electronicport')
var mixerRouter = require('./mixer')
var coffeemachineRouter = require('./coffeemachine')
var disheswashingRouter = require('./disheswashing')
var dishesdryingRouter = require('./dishesdrying')
var foodtrashRouter = require('./foodtrash')

var washerRouter = require('./washer')
var electroniccleaningRouter = require('./electroniccleaning')

var tvRouter = require('./tv')
var airconditionRouter = require('./aircondition')
var heaterRouter = require('./heater')
var airwasherRouter = require('./airwasher')
var humidificationRouter = require('./humidification')
var dehumidificationRouter = require('./dehumidification')
var waterpuriferRouter = require('./waterpurifer')

var gamemachineRouter = require('./gamemachine')
var desktopRouter = require('./desktop')
var monitorRouter = require('./monitor')
var keyboardRouter = require('./keyboard')
var mouseRouter = require('./mouse')
var efmRouter = require('./efm')

var laptopRouter = require('./laptop')
var printerscannerRouter = require('./printerscanner')
var printerRouter = require('./printer')
var scannerRouter = require('./scanner')

var speakerRouter = require('./speaker')
var headphoneRouter = require('./headphone')

var homeRouter = require('./home')

module.exports = function (app) {
    router.get('/', function (req, res) {
        console.log('/Main..')
        var dbsort = { time: -1 }
        Client.connect('mongodb://dev:dev@13.125.4.46:27017', { useNewUrlParser: true }, function (err, doc) {
            if (err) {
                console.error('Connection failed..', err)
                return
            } else {
                db = doc.db('test')
                var data = []
                db.collection('laptop').find().sort(dbsort).limit(10).toArray(function (err, docs) {
                    data.push(docs)
                    // console.log(data)
                    db.collection('washer').find().sort(dbsort).limit(10).toArray(function (err, docs) {
                        data.push(docs)
                        db.collection('refrigerator').find().sort(dbsort).limit(10).toArray(function (err, docs) {
                            data.push(docs)
                            // console.log(data)
                            res.send(data)
                        })
                    })
                })
            }
        })
    })


    app.use(cors())
    app.use('/smartphone', smartphoneRouter)
    app.use('/tablet', tabletRouter)
    app.use('/smartwatch', smartwatchRouter)

    app.use('/digitalcamera', digitalcameraRouter)
    app.use('/dslr', dslrRouter)
    app.use('/actioncamera', actioncameraRouter)

    app.use('/kimchirefrigerator', kimchirefrigeratorRouter)
    app.use('/refrigerator', refrigeratorRouter)
    app.use('/electronicrice', electronicriceRouter)
    app.use('/induction', inductionRouter)
    app.use('/electronic', electronicRouter)
    app.use('/oven', ovenRouter)
    app.use('/electronicport', electronicportRouter)
    app.use('/mixer', mixerRouter)
    app.use('/coffeemachine', coffeemachineRouter)
    app.use('/disheswashing', disheswashingRouter)
    app.use('/dishesdrying', dishesdryingRouter)
    app.use('/foodtrash', foodtrashRouter)

    app.use('/washer', washerRouter)
    app.use('/electroniccleaning', electroniccleaningRouter)

    app.use('/tv', tvRouter)
    app.use('/aircondition', airconditionRouter)
    app.use('/heater', heaterRouter)
    app.use('/airwasher', airwasherRouter)
    app.use('/humidification', humidificationRouter)
    app.use('/dehumidification', dehumidificationRouter)
    app.use('/waterpurifer', waterpuriferRouter)

    app.use('/gamemachine', gamemachineRouter)
    app.use('/desktop', desktopRouter)
    app.use('/monitor', monitorRouter)
    app.use('/keyboard', keyboardRouter)
    app.use('/mouse', mouseRouter)
    app.use('/efm', efmRouter)

    app.use('/laptop', laptopRouter)
    app.use('/printerscanner', printerscannerRouter)
    app.use('/printer', printerRouter)
    app.use('/scanner', scannerRouter)

    app.use('/speaker', speakerRouter)
    app.use('/headphone', headphoneRouter)

    app.use('/home', homeRouter)
    app.use('/', router)
}
