import User from '../../models/User'
import connectDb from '../../middleware/mongoose'
var CryptoJS = require("crypto-js");

const handler = async (req,res)=>{
    if (req.method == 'POST'){
        let user = await User.findOne({"email": req.body.email})

        // Decryptossword
        var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
        var orignalPassword = bytes.toString(CryptoJS.enc.Utf8);

        if (user){

            if (req.body.email === user.email && req.body.password === user.password){
                res.status(200).json({ success: true, message: "Succesfully LogIn!", email:user.email, name:user.name})
            }
            else{
                res.status(400).json({ success: false, message: "Invalid Credentials!" })
            }
        }

        else{
            res.status(400).json({ success: "none" , message: "No user Found!" })
        }

    }

}
export default connectDb(handler);