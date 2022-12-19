const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017');
  
}

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

mongoose.model = {};
export default mongoose.model('Product', productSchema);