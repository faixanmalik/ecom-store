const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  // firstname, lastname, email, country, streetAddress, city, state, zip
    firstName:{type: String, required: true},
    lastName:{type: Number, required: true},
    email:{type: String, required: true},
    country:{type: String, required: true},
    streetAddress: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zip: {type: Number, required: true},
  },{timestamps:true});

mongoose.models={}
export default mongoose.model("Order", OrderSchema);