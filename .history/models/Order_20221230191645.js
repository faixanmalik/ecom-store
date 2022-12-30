const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  // firstname, lastname, email, country, streetAddress, city, state, zip
    firstName:{type: String, required: true},
    lastName:{type: Number, required: true},
    email:{type: String, default: ''},
    country:{type: String, required: true},
    streetAddress: {type: Number, required: true},
    city: {type: Number, required: true},
    state: {type: Number, required: true},
    zip: {type: String, default: 'Pending', required: true},
  },{timestamps:true});

mongoose.models={}
export default mongoose.model("Order", OrderSchema);