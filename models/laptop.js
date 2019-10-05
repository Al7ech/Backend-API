const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const laptopSchema = new Schema({
    title: String
},
{
    collection: 'laptop'
});

// laptopSchema.statics.create = function(payload){
//     const laptop = new this(payload)
//     return laptop.save();
// };

// laptopSchema.statics.findAll = function(){
//     return this.find({});
// };

// laptopSchema.statics.findOneByRam = function(ramsize){
//     return this.findOne({ramsize});
// }

module.exports = mongoose.model('laptop', laptopSchema);