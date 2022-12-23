import User from '../../models/User'
import connectDb from '../../middleware/mongoose'

import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const handler = async (req,res)=>{
    <ToastContainer position="bottom-center" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
    if (req.method == 'POST'){
        let user = await User.findOne({"email": req.body.email})
        if (user){

            if (req.body.email === user.email && req.body.password === user.password){
                res.status(200).json({ success: true, email:user.email, name:user.name})
            }
            else{
                res.status(400).json({ success: false, error: "Invalid Credentials!" })
            }
            
        }
        else{
            res.status(400).json({ success: false,  error: "No user Found!" })
        }

    }

}
export default connectDb(handler);