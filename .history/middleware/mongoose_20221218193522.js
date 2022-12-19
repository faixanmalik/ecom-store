import mongoose from "mongoose";
import handler from "../pages/api/getproducts";

const connectDb = handler(req,res)=>{
    if (mongoose.connections[0].readyState){
        return handler(req,res);
    }
    await mongoose.connect(process.env.MONGO_URI)
    return handler(req,res);
    }

export default connectDb;