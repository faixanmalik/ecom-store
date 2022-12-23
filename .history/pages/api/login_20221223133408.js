import User from '../../models/User'
import connectDb from '../../middleware/mongoose'

const handler = async (req,res)=>{
    if (req.method == 'POST'){
        let user = await User.findone({"email": req.body.email})
        if (user){
            if (req.body.email === user.email && req.body.password === user.password){

            }

        }

        res.status(200).json({ success: "New User added Succesfully!" })
    }
    else{
        res.status(400).json({ error: "User is not added!" })
    }

}
export default connectDb(handler);