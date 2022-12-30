import Order from '../../models/Order'
import connectDb from '../../middleware/mongoose'
import { useRouter } from 'next/router'


const handler = async (req,res)=>{

    const router = useRouter()
    const { slug } = router.query

    if (req.method == 'POST'){
        const {firstName, lastName, email, country, products , streetAddress, city, state, zip} = req.body;
        let newOrder = new Order( {firstName, lastName, email, country, products, productId: slug , Quantity: products.Quantity ,streetAddress, city, state, zip} );
        console.log(newOrder);
        await newOrder.save();
        res.status(200).json({ success: true, message: "New Order Added !"})
        }

    }


export default connectDb(handler);