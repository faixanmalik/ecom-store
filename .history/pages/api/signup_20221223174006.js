import User from '../../models/User'
import connectDb from '../../middleware/mongoose'
import Router from 'next/router'


const handler = async (req,res)=>{

    if (req.method == 'POST'){
        let user = await User.findOne({"email": req.body.email})
        if (user){
            if (req.body.email === user.email){
                res.status(400).json({ success: false, message: "Already have an account!"})
                Router.push('http://localhost:3000/login')
                }
            }
        else{
            let newuser = new User(req.body);
            await newuser.save();
            res.status(200).json({ success: true, message: "New User added Succesfully!"})
            }
        }
    }


export default connectDb(handler);