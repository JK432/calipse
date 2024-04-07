const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const hotel = new Schema({
    name: String,
    address: String,
    price: String,
    image:String,
})


const accoSchema = new Schema({
    destination: { type: String, required: true },
    hotels: [hotel],
}
);


const Accommodation = mongoose.model("acco", accoSchema, 'accomadation')
module.exports = Accommodation;