const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const rest = new Schema({
    name: String,
    image: String,
    class: String,
})
const restSchema = new Schema({
    destination: { type: String, required: true },
    resturent: [rest],
}
);
const Resturent = mongoose.model("rest", restSchema, 'resturents')
module.exports = Resturent;
