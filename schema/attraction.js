const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const places = new Schema({
    title:String,
    image:String,
    disc:String,
})


const attractionSchema =  new Schema(
    {
    destination:{type:String,required:true},
    image: { type: String, required: true },
    places:[places],
    }

);


const Attraction = mongoose.model('attract',attractionSchema,'attraction')

module.exports = Attraction;
