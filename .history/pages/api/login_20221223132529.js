import User from '../../models/User'
import connectDb from '../../middleware/mongoose'

const handler = async (req,res)=>{
    if (req.method == 'POST'){

        if (req.body.email === "email" && req.body.password === "password")

        res.status(200).json({ success: "New User added Succesfully!" })
    }
    else{
        res.status(400).json({ error: "User is not added!" })
    }

}
export default connectDb(handler);