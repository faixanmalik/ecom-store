import Product from '../../models/P'
import mongoose from '../../middleware/mongoose';



const handler =  async(_req, res) => {
    let Product = await Product.find();

    res.status(200).json({ Product });
  }


export default handler;