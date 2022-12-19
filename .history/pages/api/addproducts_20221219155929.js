import Product from '../../models/Product'
import connectDb from '../../middleware/mongoose'

const handler = async (req,res)=>{
    if (req.method == 'POST'){
        let addproduct = new Product({
            title: req.body[i].title,
            desc: req.body[i].title,
            slug: req.body[i].title ,
            img: req.body[i].title,
            category: req.body[i].title,
            size: req.body[i].title ,
            color: req.body[i].title ,
            price: req.body[i].title,
            avilableQty: req.body[i].title,
        })
    }
    else{
        res.status(400).json({ error: "This method is not allowed!" })
    }

    let products = await Product.find()
}
export default connectDb(handler);