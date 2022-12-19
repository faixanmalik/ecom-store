const mongoose = require('mongoose');


async function connectDb() {
    if (mongoose.connections[0].readyState){
        return handler(req,res)
    };
    await mongoose.connect('mongodb://localhost:27017');
    return handler(req,res)
}
connectDb().catch(err => console.log(err));


// const connectDb = handler => async(req,res) =>{
//     if (mongoose.connections[0].readyState){
//         return handler(req,res)
//     };
//     await mongoose.connect('mongodb://localhost:27017')
//     return handler(req,res)
//     };

export default connectDb;