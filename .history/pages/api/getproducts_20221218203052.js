// import Product from '../../models/Product'
import mongoose from '../../middleware/mongoose';
import main from '../../model/Product';



const handler =  async(_req, res) => {
    let Product = await main.find();

    res.status(200).json({ Product });
  }


export default handler;