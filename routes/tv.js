var express = require('express')
var router = express.Router()
var Client = require('mongodb').MongoClient

//washer
router.route('/').get(function(req, res){
    console.log('/tv..')
    var paramCompany = req.query.company
    var paramCapacity = req.query.capacity
    var paramDisplay = req.query.display

    var query= {}
    if(req.query.company && req.query.company.length != 0) query.company = {$in:paramCompany}

    if(req.query.isIgnoreDisplay == 'false'){
        query.display = {$gte : Number(req.query.display[0]), $lte : Number(req.query.display[1])}
    }
    if(req.query.isIgnorePrice == 'false'){
        query.price = {$gte : Number(req.query.price[0]), $lte : Number(req.query.price[1])}
    }
    
    var dbsort = { time : -1 }
    console.log(query)
    Client.connect('mongodb://dev:dev@13.125.4.46:27017', {useNewUrlParser : true}, function(err, doc){
        if(err){
            console.error('Connection failed..', err)
            return
        } else{
            db = doc.db('test')
            washerColl = db.collection('tv').find(query).sort(dbsort).limit(30).toArray(function(err,docs){
                res.send(docs)
            })
        }
    })
})


module.exports = router