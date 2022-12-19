import mongoose from "mongoose";


const connectDB = (handler)=>{
    if (mongoose.connections[0].readyState){
        return handler(req,res)
    }
    else await mongoose.connect(process.env.NODE_ENV)
}