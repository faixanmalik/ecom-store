const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userId: String,
    firstname:{type: String, required: true},
    lastname:{type: String, required: true},
    email: {type: Number, required: true},
    password: {type: String, default: 'Pending', required: true},
  },{timestamps:true});
   

mongoose.models = {}
export default mongoose.model("User", UserSchema);