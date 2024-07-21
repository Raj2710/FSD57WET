import auth from "../common/auth.js";
import employeeModel from "../model/employeeModel.js";

const login = async(req,res)=>{
    try {
        let user = await employeeModel.findOne({email:req.body.email});
        if(user)
        {
            //validate pwd
            if(await auth.hashCompare(req.body.password,user.password))
            {
                res.status(200).send({
                    message:"Login Successfull"
                })
            }
            else
            {
                res.status(400).send({
                    message:"Incorrect Password"
                })
            }

        }
        else
        {
            res.status(400).send({
                message:`User does not exists`
            })
        }
       
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error",
            error
        })
    }
}

export default {
    login
}