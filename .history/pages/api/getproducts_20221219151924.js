import Product from '../../models/Product'
import connectDb from '../../middleware/mongoose'

const handler = async (req,res)=>{

}
export default async function handler(req, res) {
    let products = await Product.find()
    res.status(200).json({ name: 'John Doe' })
  }
  