import Product from '../../models/Product'
import connectDb from '../../middleware/mongoose'
import handler from './hello';

// export default async function handler(req, res) {

const connectDb = handler=>  async(req, res) => {
    let product = await Product.find();

    res.status(200).json({ product });
  }

export default connectDb(handler);