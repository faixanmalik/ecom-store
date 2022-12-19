import Product from '../../models/Product'
import connectDb from '../../middleware/mongoose'

const handler = async (req,res)=>{
    if (req.method == 'POST'){

    }
    else{
        res.status(400).json({ error: This method is not allowed! })
    }
    let products = await Product.find()
}
export default connectDb(handler);