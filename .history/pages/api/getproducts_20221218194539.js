import Product from '../../models/Product'

// export default async function handler(req, res) {

const handler =  async(req, res) => {
    let product = await Product.find();

    res.status(200).json({ Product });
  }


export default handler;