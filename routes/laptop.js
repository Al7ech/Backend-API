var express = require('express')
var router = express.Router()
var Client = require('mongodb').MongoClient

// Laptop
router.get('/',function(req, res){
    console.log('/laptop..')
    var paramCompany = req.query.company
    var paramCpu = req.query.cpu
    var paramRam = req.query.ram
    var paramDisplay = req.query.display
    var paramSSD = req.query.ssd

    var query= {}
    if(req.query.company && req.query.company.length != 0) query.company = {$in:paramCompany}
    if(req.query.cpu && req.query.cpu.length != 0) query.cpu = {$in:paramCpu}
    
    if(req.query.isIgnoreRam == 'false'){
        console.log('if isIgnoreRam')
        query.ram = {$gte : Number(req.query.ram[0]), $lte : Number(req.query.ram[1])}
        console.log(query.ram)
    }
    if(req.query.isIgnoreDisplay == 'false'){
        query.display = {$gte : Number(req.query.display[0]), $lte : Number(req.query.display[1])}
        console.log(query.display)
    }
    if(req.query.isIgnoreSSD == 'false'){
        query.ssd = {$gte : Number(req.query.ssd[0]), $lte : Number(req.query.ssd[1])}
        console.log(query.ssd)
    }
    if(req.query.isIgnorePrice == 'false'){
        query.price = {$gte : Number(req.query.price[0]), $lte : Number(req.query.price[1])}
        console.log(query.price)
    }
    if(req.query.title != ""){
        titles = req.query.title.split(" ")
        titlequery = []
        titles.forEach(function(title) {
            titlequery.push({"title" : { $regex: '.*'+title+'.*'}})
        })
        query.$and = titlequery
    }

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
        }
    })
})

router.get('/:pagenum',function(req, res){
    console.log('/laptop:pagenum..')
    var pagenum = req.params["pagenum"]
    var paramCompany = req.query.company
    var paramCpu = req.query.cpu
    var paramRam = req.query.ram
    var paramDisplay = req.query.display
    var paramSSD = req.query.ssd

    var query= {}
    if(req.query.company && req.query.company.length != 0) query.company = {$in:paramCompany}
    if(req.query.cpu && req.query.cpu.length != 0) query.cpu = {$in:paramCpu}
    
    if(req.query.isIgnoreRam == 'false'){
        console.log('if isIgnoreRam')
        query.ram = {$gte : Number(req.query.ram[0]), $lte : Number(req.query.ram[1])}
        console.log(query.ram)
    }
    if(req.query.isIgnoreDisplay == 'false'){
        query.display = {$gte : Number(req.query.display[0]), $lte : Number(req.query.display[1])}
        console.log(query.display)
    }
    if(req.query.isIgnoreSSD == 'false'){
        query.ssd = {$gte : Number(req.query.ssd[0]), $lte : Number(req.query.ssd[1])}
        console.log(query.ssd)
    }
    console.log('query : ',query)
    var dbsort = { time : -1 }
    var skipn = (pagenum - 1) * 30
    var limitn = pagenum * 30
    Client.connect('mongodb://dev:dev@13.125.4.46:27017', {useNewUrlParser : true}, function(err, doc){
        if(err){
            console.error('Connection failed..', err)
            return
        } else{
            db = doc.db('test')
            laptopColl = db.collection('laptop').find(query).sort(dbsort).skip(skipn).limit(limitn).toArray(function(err,docs){
                res.send(docs)
            })
        }
    })
})


module.exports = router