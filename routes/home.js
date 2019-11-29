var Fiber = require('fibers');
var express = require('express')
var router = express.Router()
//var Client = require('mongodb').MongoClient

var Server = require("mongo-sync").Server;
var Client = require("mongo-sync").MongoClient;


/*
router.route('/').get(function (req, res) {

    var query = {}

    Client.connect('mongodb://dev:dev@13.125.4.46:27017/test', { useNewUrlParser: true }, function (err, doc) {
        if (err) {
            console.error('Connection failed..', err)
            return
        }
        else {
            const db = doc.db('test')
            var resData = []
            try{
            actioncamera = db.collection('actioncamera').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            aircondition = db.collection('aircondition').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            airwasher = db.collection('airwasher').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            coffeemachine = db.collection('coffeemachine').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            dehumidification = db.collection('dehumidification').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            desktop = db.collection('desktop').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            digitalcamera = db.collection('digitalcamera').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            dishesdrying = db.collection('dishesdrying').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            disheswashing = db.collection('disheswashing').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            dslr = db.collection('dslr').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            efm = db.collection('efm').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            electronic = db.collection('electronic').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            electroniccleaning = db.collection('electroniccleaning').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            electronicport = db.collection('electronicport').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            electronicrice = db.collection('electronicrice').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            foodtrash = db.collection('foodtrash').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            gameamchine = db.collection('gameamchine').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            headphone = db.collection('headphone').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            heater = db.collection('heater').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            humidification = db.collection('humidification').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            induction = db.collection('induction').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            keyboard = db.collection('keyboard').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            kimchirefrigerator = db.collection('kimchirefrigerator').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            laptop = db.collection('laptop').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            mixer = db.collection('mixer').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            monitor = db.collection('monitor').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            mouse = db.collection('mouse').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            oven = db.collection('oven').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            printer = db.collection('printer').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            printerscanner = db.collection('printerscanner').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            refrigerator = db.collection('refrigerator').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            scanner = db.collection('scanner').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            smartphone = db.collection('smartphone').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            smartwatch = db.collection('airsmartwatchwasher').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            speaker = db.collection('speaker').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            tablet = db.collection('tablet').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            tv = db.collection('tv').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            washer = db.collection('washer').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })

            waterprurifer = db.collection('waterprurifer').countDocuments(function (err, doc) {
                if(err){
                    console.log(err);
                }else{
                    console.log(doc)
                    resData.push(doc)
                }
            })
            }
            catch (e) {
                console.log(e);
                res.status(500)
                res.end();
            }

            console.log(resData)
            res.send(resData)
        }
    })
})
*/

module.exports = router