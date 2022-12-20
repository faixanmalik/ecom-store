import Product from '../../models/Product'
import connectDb from '../../middleware/mongoose'

const handler = async (req,res)=>{
    let products = await Product.find()

    let tshirts= {}
    for(let item of products ) {
        if (item._id in tshirts) {
            if (!tshirts[item._id].color.includes(item.color) && item.avilableQty > 0) {
                tshirts[item._id].color.push(item.color)
            }
            if (!tshirts[item._id].size.includes(item.size) && item.avilableQty > 0) {
                tshirts[item._id].size.push(item.size)
            }
        }
        else {
            // tshirts[item._id] is key and its value is whole object(item)
            tshirts[item._id] = JSON.parse(JSON.stringify(item))
            if(item.avilableQty > 0) {
                tshirts[item._id].color = [item.color]
                tshirts[item._id].size = [item.size]
            }

        }
    };

    res.status(200).json( tshirts )
}
export default connectDb(handler);