import User from '../../models/User'
import connectDb from '../../middleware/mongoose'
// import Router from 'next/router'
import { useRouter } from 'next/router'

const router = useRouter();

const handler = async (req,res)=>{

    if (req.method == 'POST'){
        let user = await User.findOne({"email": req.body.email})
        if (user){
            if (req.body.email === user.email){
                res.status(400).json({ success: false, message: "Already have an account!"})
                router.push('http://localhost:3000/login');
                }
            }
        else{
            let newuser = new User(req.body);
            await newuser.save();
            res.status(200).json({ success: true, message: "New User added Succesfully!"})
            router.push('http://localhost:3000/login');
            }
        }
    }











    // if (req.method == 'POST'){
    //     let user = new User(req.body);
    //     await user.save();

    //     res.status(200).json({ success: true, message: "New User added Succesfully!"})
    // }
    // else{
    //     res.status(400).json({ success: false , message: "User is not added!" })
    // }

export default connectDb(handler);