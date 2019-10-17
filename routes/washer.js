var express = require('express')
var router = express.Router()
var Client = require('mongodb').MongoClient

//washer
router.route('/').get(function(req, res){
    console.log('/washer..')
    var paramCompany = req.query.company
    var paramCapacity = req.query.capacity
    var paramDoor = req.query.door

    var query= {}
    if(req.query.company && req.query.company.length != 0) query.company = {$in:paramCompany}

    if(req.query.isIgnoreCapacity == 'false'){
        console.log('if isIgnoreCapacity')
        query.size = {$gte : Number(req.query.capacity[0]), $lte : Number(req.query.capacity[1])}
        console.log(query.size)
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


module.exports = router