import Product from '../../models/Product'
import connectDb from '../../middleware/mongoose'

const handler = async (req,res)=>{
    if (req.method == 'POST'){
        let addproduct = new Product({
            title:,
            desc:,
            slug: ,
            img:,
            category:,
            size: Number,
            color: String,
            price:,
            avilableQty:,
        })
    }
    else{
        res.status(400).json({ error: "This method is not allowed!" })
    }

    let products = await Product.find()
}
export default connectDb(handler);