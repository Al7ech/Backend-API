// routes/index.js

const router = require('express').Router()
const Laptop = require('../models/laptop');
const Washer = require('../models/washer');


router.get('/a', function(req,res){
    
});

// module.exports = function(app,Laptop){

//     app.get('/', function(req,res){
//         return 11;
//     });
// 	app.get('/api/books', function(req,res){
// 		res.end();
// 	});

// 	app.get('/api/laptop', function(req,res){
// 		res.end();
//     });
    
//     app.post('/api/laptops', function(req,res){
//         var laptop = new Laptop();
//         laptop.title = req.body.name;

//         laptop.save(function(err){
//             if(err){
//                 console.o=log(err);
//                 res.json({result: 0});
//                 return ;
//             }

//             res.json({result:1});
//         });
//     });
// }

module.exports = router;