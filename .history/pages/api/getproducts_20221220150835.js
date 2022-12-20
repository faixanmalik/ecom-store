import Product from '../../models/Product'
import connectDb from '../../middleware/mongoose'

const handler = async (req,res)=>{
    let products = await Product.find()

    let tshirts= {}
    products.forEach(item => {
        if (item.slug in tshirts) {
            if (!tshirts[item.slug].color.includes(item.color) && item.avilableQty > 0) {
                tshirts[item.slug].push(item.color)
            }
        }
        else {
            // tshirts[item.slug] is key and its value is whole object(item)
            tshirts[item.slug] = JSON.parse(json.stringify(item))
            if(item.avilableQty > 0) {
                tshirts[item.slug].color = [item.color]
                tshirts[item.slug].size = [item.size]
            }

        }
    });

    res.status(200).json( products )
}
export default connectDb(handler);