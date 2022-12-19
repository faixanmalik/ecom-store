const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}


// const connectDb = handler => async(req,res) =>{
//     if (mongoose.connections[0].readyState){
//         return handler(req,res)
//     };
//     await mongoose.connect('mongodb://localhost:27017')
//     return handler(req,res)
//     };

export default connectDb;