const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    email:{type: String, required: true},
    orderId:{type: Number, required: true},
    paymentInfo:{type: Number, required: true},
    products: [{
        productId: String,
        quantity: {type: Number, default: 1}
    }],
    address:{type: String, required: true},
    amount: {type: Number, required: true},
    status: {type: String, default: 'Pending', required: true},
  },{timestamps:true});

mongoose.models={}
export default mongoose.model("Order", OrderSchema);