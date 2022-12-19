const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/');
  
}



const kittySchema = new mongoose.Schema({
  name: String
});


const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'



export default main











// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//     title:{type: String, required: true},
//     desc: {type: String, required: true},
//     slug: {type: String, required: true, unique: true},
//     img: {type: String, required: true},
//     category: {type: String, required: true},
//     size: Number,
//     color: String,
//     price: {type: Number, required: true},
//     avilableQty: {type: Number, required: true},

//   },{timestamps:true});


// const Product = mongoose.model('Product', productSchema);

// // mongoose.model = {};



// export default Product