import product from '../../models/product'
import mongoose from '../../middleware/mongoose';



const handler =  async(_req, res) => {
    let product = await product.find();

    res.status(200).json({ product });
  }


export default handler;