import Product from '../../models/Product'
import connectDb from '../../middleware/mongoose'

const handler = async (req,res)=>{
    let products = await Product.find()

    // let tshirts= {}
    // for (let item of products){
    //     if (item.slug in tshirts) {
    //         if (!tshirts[item.slug].color.includes(item.color) && item.avilableQty > 0) {
    //             tshirts[item.slug].color.push(item.color)
    //         }
    //         if (!tshirts[item.slug].size.includes(item.size) && item.avilableQty > 0) {
    //             tshirts[item.slug].size.push(item.size)
    //         }
    //     }
    //     else {
    //         // tshirts[item.slug] is key and its value is whole object(item)
    //         tshirts[item.slug] = JSON.parse(JSON.stringify(item))
    //         if(item.avilableQty > 0) {
    //             tshirts[item.slug].color = [item.color]
    //             tshirts[item.slug].size = [item.size]
    //         }

    //     }
    // };

    res.status(200).json( {tshirts} )
}
export default connectDb(handler);