
var express = require('express')
var router = express.Router()
var Client = require('mongodb').MongoClient

//refrigerator
router.route('/').get(function(req, res){
    console.log('/refrigerator..')
    var paramCompany = req.query.company

    var query= {}
    if(req.query.company && req.query.company.length != 0) query.company = {$in:paramCompany}
    console.log(req.query.isIgnoreCapacity)

    if(req.query.isIgnorePrice == 'false'){
        query.price = {$gte : Number(req.query.price[0]), $lte : Number(req.query.price[1])}
    }
    console.log(query)
    var start = (req.query.count-1) * 30
    var end = (req.query.count) * 30
    console.log(req.query.count)
    console.log('query : ',query)
    var dbsort = { time : -1 }
    Client.connect('mongodb://dev:dev@13.125.4.46:27017/test', {useNewUrlParser : true}, function(err, doc){
        if(err){
            console.error('Connection failed..', err)
            return
        } else{
            const db = doc.db('test')
            laptopColl = db.collection('mixer').find(query).sort(dbsort).skip(start).limit(end).toArray(function(err,docs){
                res.send(docs)
            })
        }
    })
})


router.get('/:pagenum',function(req, res){
    console.log('/laptop:pagenum..')
    var pagenum = req.params["pagenum"]
    var paramCompany = req.query.company

    var query= {}
    if(req.query.company && req.query.company.length != 0) query.company = {$in:paramCompany}

    console.log('query : ',query)
    var dbsort = { time : -1 }
    var skipn = (pagenum - 1) * 30
    var limitn = pagenum * 30
    Client.connect('mongodb://dev:dev@13.125.4.46:27017/test', {useNewUrlParser : true}, function(err, doc){
        if(err){
            console.error('Connection failed..', err)
            return
        } else{
            const db = doc.db('test')
            laptopColl = db.collection('mixer').find(query).sort(dbsort).skip(start).limit(end).toArray(function(err,docs){
                res.send(docs)
            })
        }
    })
})

module.exports = router