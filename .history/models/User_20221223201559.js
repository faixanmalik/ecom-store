const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname:{type: String, required: true},
    lastname:{type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, default: 'Pending', required: true},
    file: Buffer,
  },{timestamps:true});
   

mongoose.models = {}
export default mongoose.model("User", UserSchema);