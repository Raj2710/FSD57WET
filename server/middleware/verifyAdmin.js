import auth from "../common/auth.js"
import userModel from "../models/user.js"
const verifyAdmin = async (req,res,next)=>{
    try {
        let token = req.headers.authorization?.split(" ")[1]
        if(token)
        {
            let payload = await auth.decodeToken(token)
            let user = await userModel.findById(payload._id)

            if(user && payload.role === 'Admin' && user.role === payload.role)
                next()
            else
            {
                res.status(401).send({
                    message:"Unauthorized Access"
                })
            }
        }
        else
            res.status(401).send({
                message:"Invalid Token"
            })
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server error"
        })
    }
}

export default verifyAdmin