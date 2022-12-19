import mongoose from "mongoose";
import { handleClientScriptLoad } from "next/script";


const connectDB = ()=>{
    if (mongoose.connections[0].readyState){
        return handleClientScriptLoad;
    }
}