import Product from '../../models/Product'
import connectDb from '../../middleware/mongoose'

const handler = async (req,res)=>{
    let products = await Product.find()

    let tshirts= {}
    products.forEach(item => {
        if (item.title in tshirts) {

        }
        else {
            tshirts[item.title] = JSON.parse(json.stringify(item))
            if(item.avilableQty > 0) {
                tshirts[item.title].color = []
            }

        }
    });

    res.status(200).json( products )
}
export default connectDb(handler);