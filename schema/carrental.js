const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const carSchema = new Schema({
    name: { type: String, required: true },
    image: String,
}
);
const carrental = mongoose.model("car", carSchema, 'carrental')
module.exports = carrental;