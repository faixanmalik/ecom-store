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
            let encryptdata = CryptoJS.AES.encrypt(newuser.password, 'secretkey123').toString();
            let newuser = new User(req.body);
            console.log(encryptdata);
            await encryptdata.save();
            res.status(200).json({ success: true, message: "New User added Succesfully!"})
            }
        }
    }


export default connectDb(handler);