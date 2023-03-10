import User from '../../models/User'
import connectDb from '../../middleware/mongoose'

const handler = async (req,res)=>{
    if (req.method == 'POST'){
        let user = await User.findOne({"email": req.body.email})
        if (user){

            if (req.body.email === user.email && req.body.password === user.password){
                res.status(200).json({ success: true, email:user.email, name:user.name})
                toast.success('Login successfully!', { position: "bottom-center", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
            }
            else{
                res.status(400).json({ success: false, error: "Invalid Credentials!" })
                toast.error('Invalid Credentials!', { position: "bottom-center", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
            }
            
        }
        else{
            res.status(400).json({ success: false,  error: "No user Found!" })
            toast.error('No User Found!', { position: "bottom-center", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
        }

    }

}
export default connectDb(handler);