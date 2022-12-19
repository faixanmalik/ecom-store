import Product from '../../models/Product'
import connectDb from '../../middleware/mongoose'


export default async function handler(req, res) {
    let products = await Product.find()
    res.status(200).json({ name: 'John Doe' })
  }
  