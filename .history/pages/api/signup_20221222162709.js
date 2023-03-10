import Product from '../../models/User'
import connectDb from '../../middleware/mongoose'

const handler = async (req,res)=>{
    if (req.method == 'POST'){

        res.status(200).json({ success: "Item added Succesfully!" })
    }
    else{
        res.status(400).json({ error: "This method is not allowed!" })
    }

}
export default connectDb(handler);