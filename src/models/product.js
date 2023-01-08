const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    image: String,
    tag: String
});

module.exports =  mongoose.model('Product', productSchema);