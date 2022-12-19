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


const name = new Product({ name: 'my firstproduct' });
const Product = mongoose.model('Product', productSchema);

mongoose.model = {};






export default Product