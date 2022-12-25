import User from '../../models/User'
import connectDb from '../../middleware/mongoose'
var CryptoJS = require("crypto-js");


const handler = async (req,res)=>{

    if (req.method == 'POST'){
        let user = await User.findOne({"email": req.body.email})
        if (user){
            if (req.body.email === user.email){
                res.status(400).json({ success: false, message: "Already have an account!"})
                }
            }
        else{
            let newuser = new User(req.body);
            var encryptdata = CryptoJS.AES.encrypt(req.body,password, 'secret key 123').toString();
            await encryptdata.save();
            res.status(200).json({ success: true, message: "New User added Succesfully!"})
            }
        }
    }


export default connectDb(handler);