const mongoose = require('mongoose');

connectDb().catch(err => console.log(err));

async function connectDb() {
    if (mongoose.connections[0].readyState){
        return handler(req,res)
    };
  await mongoose.connect('mongodb://localhost:27017');
  
}


// const connectDb = handler => async(req,res) =>{
//     if (mongoose.connections[0].readyState){
//         return handler(req,res)
//     };
//     await mongoose.connect('mongodb://localhost:27017')
//     return handler(req,res)
//     };

export default connectDb;