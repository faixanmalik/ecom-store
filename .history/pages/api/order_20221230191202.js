import Order from '../../models/Order'
import connectDb from '../../middleware/mongoose'


const handler = async (req,res)=>{

    if (req.method == 'POST'){
        const {firstname, lastname, email} = req.body;
        let newuser = new User( {firstname, lastname, email , password:CryptoJS.AES.encrypt(req.body.password, 'secretkey123').toString()});
        await newuser.save();
        res.status(200).json({ success: true, message: "New User added Succesfully!"})
        }

    }


export default connectDb(handler);