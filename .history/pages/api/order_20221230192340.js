import Order from '../../models/Order'
import connectDb from '../../middleware/mongoose'


const handler = async (req,res)=>{

    if (req.method == 'POST'){

        let newOrder = new Order( {firstName, lastname, email, country, streetAddress, city, state, zip});
        await newOrder.save();
        res.status(200).json({ success: true, message: "New Order Added !"})
        }

    }


export default connectDb(handler);