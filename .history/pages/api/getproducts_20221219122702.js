import Product from '../../models/Product'
import mongoose from '../../middleware/mongoose';



const handler =  async(req, res) => {
    let Product = await Product.find();

    res.status(200).json({ Product });
  }


export default handler;