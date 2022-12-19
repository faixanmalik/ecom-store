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


  const Product = mongoose.model('product', productSchema);
  const name = new Product({ name: 'Silence' });

  mongoose.model = {};






export default product