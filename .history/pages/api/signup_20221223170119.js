import User from '../../models/User'
import connectDb from '../../middleware/mongoose'

const handler = async (req,res)=>{

    if (req.method == 'POST'){
        let user = await User.findOne({"email": req.body.email})
        if (user){

            if (req.body.email === user.email){
                res.status(200).json({ success: true, message: "Succesfully LogIn!", email:user.email, name:user.name})
            }
            else{
                res.status(400).json({ success: false, message: "Invalid Credentials!" })
            }
            
        }
        else{
            res.status(400).json({ success: false,  error: "No user Found!" })
        }

    }
    }











    if (req.method == 'POST'){
        let user = new User(req.body);
        await user.save();

        res.status(200).json({ success: true, message: "New User added Succesfully!"})
    }
    else{
        res.status(400).json({ success: false , message: "User is not added!" })
    }

}
export default connectDb(handler);