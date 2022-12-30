import Order from '../../models/Order'
import connectDb from '../../middleware/mongoose'


const handler = async (req,res)=>{

    if (req.method == 'POST'){

        const {firstname, lastname, email, country, streetAddress, city, state, zip} = req.body;
        let newOrder = new Order( {firstname, lastname, email , });
        await newOrder.save();
        res.status(200).json({ success: true, message: "New Order Added !"})
        }

    }


export default connectDb(handler);