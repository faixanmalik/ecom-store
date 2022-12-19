import Product from '../../models/Product'
import mongoose from '../../middleware/mongoose';

// export default async function handler(req, res) {

main().catch(err => console.log(err));


const handler =  async(_req, res) => {
    console.log('connected')
    let product = await Product.find();

    res.status(200).json({ product });
  }


export default handler;