import Order from '../../models/Order'
import connectDb from '../../middleware/mongoose'


const handler = async (req,res)=>{


    if (req.method == 'POST'){
        const {firstName, lastName, email, country, products , streetAddress, city, state, zip} = req.body;
        let newOrder = new Order( products, {firstName, lastName, email, country ,streetAddress, city, state, zip} );
        await newOrder.save();
        res.status(200).json({ success: true, message: "New Order Added !"})
        }

    }


export default connectDb(handler);