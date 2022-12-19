import Product from '../../models/Product'
import connectDb from '../../middleware/mongoose'

const handler = async (req,res)=>{
    if (req.method == 'POST'){
        let addproduct = new Product({
            title:{type: String, required: true},
            desc: {type: String, required: true},
            slug: {type: String, required: true, unique: true},
            img: {type: String, required: true},
            category: {type: String, required: true},
            size: Number,
            color: String,
            price: {type: Number, required: true},
            avilableQty: {type: Number, required: true},
        })
    }
    else{
        res.status(400).json({ error: "This method is not allowed!" })
    }

    let products = await Product.find()
}
export default connectDb(handler);