const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{type: String, required: true},
    desc: {type: String, required: true},
    slug: {type: String, required: true, unique: true},
    img: {type: String, required: true},
    category: {type: String, required: true},
    size: Number,
    color: String,
    price: {type: Number, required: true},
    avilableQty: {type: Number, required: true},

  },{timestamps:true});

mongoose.models = {};

const product = mongoose.models('Product', productSchema);




export default mongoose.models('Product', productSchema)