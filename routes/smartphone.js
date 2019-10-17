var express = require('express')
var router = express.Router()
var Client = require('mongodb').MongoClient

//smartphone
router.route('/').get(function(req, res){
    console.log('/smartphone..')
    var paramCompany = req.query.company
    var paramPrice = req.query.price
    
    var query= {}
    if(req.query.company && req.query.company.length != 0) query.company = {$in:paramCompany}
    
    if(req.query.isIgnorePrice == 'false'){
        query.price = {$gte : Number(req.query.price[0]), $lte : Number(req.query.price[1])}
    }
    console.log(query)
    var dbsort = { time : -1 }
    Client.connect('mongodb://dev:dev@13.125.4.46:27017', {useNewUrlParser : true}, function(err, doc){
        if(err){
            console.error('Connection failed..', err)
            return
        } else{
            db = doc.db('test')
            smartphoneColl = db.collection('smartphone').find(query).sort(dbsort).limit(30).toArray(function(err,docs){
                if(!err){
                    res.send(docs)
                    res.end()
                }
                else{
                    console.log(err)
                }
            })
        }
    })
})


module.exports = router