// routes/main.js
var express = require('express')
var router = require('express').Router()
var Client = require('mongodb').MongoClient
var path = require('path')
var static = require('serve-static');
var cors = require('cors')

module.exports = function(app){
    router.route('/').get(function(req,res){
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
                // db.getCollectionNames().forEach(function (collname) {
                //     console.log(collname)
                //     db[collname].find().toArray(function(err,docs){
                //         data.push(docs)
                //     })
                // })
                // laptopColl = db.collection('laptop_').find(query).toArray(function(err,docs){
                //     res.send(docs)
                // })
                // res.send(data)
            }
        })
    })
    
    // Laptop
    router.route('/laptop').get(function(req, res){
        console.log('/laptop..')
        //console.log(req.query)
        var paramCompany = req.query.company
        //paramMaker = ["*ms*"]
        var paramCpu = req.query.cpu
        var paramRam = req.query.ram
        var paramDisplay = req.query.display
        var paramSSD = req.query.ssd

        // console.log(paramMaker)
        // console.log(paramCpu)
        // console.log(paramRam)
        // console.log(paramDisplay)
        // console.log(paramSSD)

        var query= {}
        if(req.query.company && req.query.company.length != 0) query.company = {$in:paramCompany}
        if(req.query.cpu && req.query.cpu.length != 0) query.cpu = {$in:paramCpu}
        // if(req.query.ram && req.query.ram.length != 0) query.ram = {$in:paramRam}
        // if(req.query.ram && req.query.ram.length != 0) {
        //     //query.capacity = {$in:paramCapacity}
        //     query.ram = {$gte : Number(req.query.minRam), $lte : Number(req.query.maxRam)}
        // }
        if(req.query.isIgnoreRam == 'false'){
            console.log('if isIgnoreRam')
            query.ram = {$gte : Number(req.query.minRam), $lte : Number(req.query.maxRam)}
            console.log(query.ram)
        }
        // if(req.query.display && req.query.display.length != 0) query.display = {$in:paramDisplay}
        // if(req.query.display && req.query.display.length != 0) {
        //     query.display = {$gte : Number(req.query.minDisplay), $lte : Number(req.query.maxDisplay)}
        // }
        if(req.query.isIgnoreDisplay == 'false'){
            query.display = {$gte : Number(req.query.minDisplay), $lte : Number(req.query.maxDisplay)}
            console.log(query.display)
        }
        // if(req.query.ssd && req.query.ssd.length != 0) query.ssd = {$in:paramSSD}
        // if(req.query.ssd && req.query.ssd.length != 0) {
        //     query.ssd = {$gte : Number(req.query.minSSD), $lte : Number(req.query.maxSSD)}
        // }
        if(req.query.isIgnoreSSD == 'false'){
            query.ssd = {$gte : Number(req.query.minSSD), $lte : Number(req.query.maxSSD)}
            console.log(query.ssd)
        }
        // var st = ""
        // for( var i = 0 ; i < paramMaker.length ; i++){
        //     if(i == 0) st += '("' + paramMaker[i] + '")'
        //     else st += " | " + '("' + paramMaker[i] + '")'
        // }
        // query.maker = st
        // console.log('st')
        // console.log(st)
        // console.log('query')
        // console.log(query)
        console.log('query : ',query)
    	var dbsort = { time : -1 }
        Client.connect('mongodb://dev:dev@13.125.4.46:27017', {useNewUrlParser : true}, function(err, doc){
            if(err){
                console.error('Connection failed..', err)
                return
            } else{
                db = doc.db('test')
                laptopColl = db.collection('laptop').find(query).sort(dbsort).limit(30).toArray(function(err,docs){
                    res.send(docs)
                })
                // laptopColl = db.collection('laptop').find().toArray(function(err,docs){
                //     res.send(docs)
                // })
            }
        })
    })

    //washer
    router.route('/washer').get(function(req, res){
        console.log('/washer..')
        var paramCompany = req.query.company
        var paramCapacity = req.query.capacity
        var paramDoor = req.query.door

        // console.log(paramCompany)
        // console.log(paramCapacity)
        // console.log(paramDoor)

        var query= {}
        if(req.query.company && req.query.company.length != 0) query.company = {$in:paramCompany}
        // if(req.query.capacity && req.query.capacity.length != 0) {
        //     //query.capacity = {$in:paramCapacity}
        //     query.capacity = {$gte : Number(req.query.minCapacity), $lte : Number(req.query.maxCapacity)}
        // }

        if(req.query.isIgnoreCapacity == 'false'){
            console.log('if isIgnoreCapacity')
            query.capacity = {$gte : Number(req.query.minCapacity), $lte : Number(req.query.maxCapacity)}
            console.log(query.capacity)
        }
        
        if(req.query.door && req.query.door.length != 0) query.door = {$in:paramDoor}
        var dbsort = { time : -1 }
        console.log(query)
        Client.connect('mongodb://dev:dev@13.125.4.46:27017', {useNewUrlParser : true}, function(err, doc){
            if(err){
                console.error('Connection failed..', err)
                return
            } else{
                db = doc.db('test')
                washerColl = db.collection('washer').find(query).sort(dbsort).limit(30).toArray(function(err,docs){
                    res.send(docs)
                })
            }
        })
    })
    
    //refrigerator
    router.route('/refrigerator').get(function(req, res){
        console.log('/refrigerator..')
        var paramCompany = req.query.company
        var paramCapacity = req.query.capacity
        console.log(paramCapacity)
        // console.log(paramMaker)
        // console.log(paramCapacity)

        var query= {}
        if(req.query.company && req.query.company.length != 0) query.company = {$in:paramCompany}
        // if(req.query.capacity && req.query.capacity.length != 0) {
        //     //query.capacity = {$in:paramCapacity}
        //     query.capacity = {$gte : Number(req.query.minCapacity), $lte : Number(req.query.maxCapacity)}
        // }
        console.log(req.query.isIgnoreCapacity)
        if(req.query.isIgnoreCapacity == 'false'){
            console.log('if isIgnoreCapacity')
            //query.capacity = {$gte : Number(req.query.minCapacity), $lte : Number(req.query.maxCapacity)}
            query.size = {$gte : Number(req.query.minCapacity), $lte : Number(req.query.maxCapacity)}
            //console.log(query.capacity)
            console.log(query.size)
        }
        console.log(query)
        var dbsort = { time : -1 }
        Client.connect('mongodb://dev:dev@13.125.4.46:27017', {useNewUrlParser : true}, function(err, doc){
            if(err){
                console.error('Connection failed..', err)
                return
            } else{
                db = doc.db('test')
                refrigeratorColl = db.collection('refrigerator').find(query).sort(dbsort).limit(30).toArray(function(err,docs){
                    res.send(docs)
                })
            }
        })
    })
    app.use(cors())
    app.use('/',router)
}
