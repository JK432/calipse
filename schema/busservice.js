const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const destination = new Schema({
   place: String,
   
})
const busSchema = new Schema({
    place: { type: String, required: true },
    destination: [String],
}
);
const Busservice = mongoose.model("buss", busSchema, 'busservice')
module.exports = Busservice;