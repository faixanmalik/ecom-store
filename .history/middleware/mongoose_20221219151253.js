import mongoose from "mongoose";


const connectDB = (handler)=>{
    if (mongoose.connections[0].readyState){
        return handler
    }
}