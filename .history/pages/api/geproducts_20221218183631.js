import Product from '../../models/Product'
import connectDb from '../../middleware/mongoose'

export default function handler(req, res) {

    let product = await Product.find();

    res.status(200).json({ name: 'John Doe' })
  }
