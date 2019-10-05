const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const washerSchema = new Schema({
    title: String
},
{
    collection: 'washer'
});

module.exports = mongoose.model('washer', washerSchema);