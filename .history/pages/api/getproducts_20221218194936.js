import Product from '../../models/Product'
import connectDb from '../../models/connectDb';

// export default async function handler(req, res) {

const handler =  async(_req, res) => {
    let product = await Product.find();

    res.status(200).json({ product });
  }


export default handler;