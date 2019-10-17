// routes/main.js
var express = require('express')
var router = require('express').Router()
var Client = require('mongodb').MongoClient
var path = require('path')
var static = require('serve-static');
var cors = require('cors')

var laptopRouter = require('./laptop')
var washerRouter = require('./washer')
var refrigeratorRouter = require('./refrigerator')
var smartphoneRouter = require('./smartphone')
var tvRouter = require('./tv')
var gamemachineRouter = require('./gamemachine')
var desktopRouter = require('./desktop')
var headphoneRouter = require('./headphone')

module.exports = function(app){
    router.get('/',function(req,res){
        console.log('/Main..')
        var dbsort = { time : -1 }
        Client.connect('mongodb://dev:dev@13.125.4.46:27017', {useNewUrlParser : true}, function(err, doc){
            if(err){
                console.error('Connection failed..', err)
                return
            } else{
                db = doc.db('test')
                var data = []
                db.collection('laptop').find().sort(dbsort).limit(10).toArray(function(err,docs){
                    data.push(docs)
                    // console.log(data)
                    db.collection('washer').find().sort(dbsort).limit(10).toArray(function(err,docs){
                        data.push(docs)
                        db.collection('refrigerator').find().sort(dbsort).limit(10).toArray(function(err,docs){
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
    app.use('/laptop', laptopRouter)
    app.use('/washer', washerRouter)
    app.use('/refrigerator', refrigeratorRouter)
    app.use('/smartphone', smartphoneRouter)
    app.use('/tv', tvRouter)
    app.use('/gamemachine', gamemachineRouter)
    app.use('/desktop', desktopRouter)
    app.use('/headphone', headphoneRouter)
    app.use('/',router)
}
