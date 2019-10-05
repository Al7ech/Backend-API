const router = require('express').Router();
const Laptop = require('../models/washer')

router.get('/', (req,res) =>{
    Laptop.findAll()
    .then((laptops) => {
        if (!laptops.length) return res.status(404).send({err: 'Laptop not found'});
        res.send('find succesfully: ${laptops}');
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router;