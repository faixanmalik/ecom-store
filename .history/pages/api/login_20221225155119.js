import User from '../../models/User'
import connectDb from '../../middleware/mongoose'
// Crypto JS
var CryptoJS = require("crypto-js");
// Jwt token
var jwt = require('jsonwebtoken');


const handler = async (req,res)=>{
    if (req.method == 'POST'){
        let users = await User.findOne({"email": req.body.email})

        if (users){
            // Decryptossword
            var bytes  = CryptoJS.AES.decrypt(users.password, 'secretkey123');
            var encryptedPassword = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            
            if (req.body.email === users.email && req.body.password === encryptedPassword){
                var token = jwt.sign({ email:users.email, name:users.name}, 'secretkey123');
                res.status(200).json({ success: true, message: "Succesfully LogIn!", token })
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