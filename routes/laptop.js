var express = require('express')
var router = express.Router()
var date = require('date-utils')

router.get('/', function (req, res, next) {
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
            query.ram = {$gte : Number(req.query.minRam), $lte : Number(req.query.maxRam)}
            console.log(query.ram)
        }
        if(req.query.isIgnoreDisplay == 'false'){
            query.display = {$gte : Number(req.query.minDisplay), $lte : Number(req.query.maxDisplay)}
            console.log(query.display)
        }
        if(req.query.isIgnoreSSD == 'false'){
            query.ssd = {$gte : Number(req.query.minSSD), $lte : Number(req.query.maxSSD)}
            console.log(query.ssd)
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


module.exports = router