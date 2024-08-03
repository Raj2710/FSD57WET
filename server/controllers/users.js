import userModel from "../models/user.js";
import auth from '../common/auth.js'
import { randString } from "../common/helper.js";

const getAllUsers = async (req,res)=>{
   try {
    let users = await userModel.find({},{firstName:1, lastName:1, email:1, role:1,userId:1, _id:0})
    res.status(200).send({
        message:"Data Fetch Successfull",
        data:users
    })
   } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error",
            error
        })
   }
}

const signup = async(req,res)=>{
    try {
        let user = await userModel.findOne({email:req.body.email});
        if(!user)
        {
            req.body.password = await auth.hashPassword(req.body.password)

            req.body.userId = randString(6)
            userModel.create(req.body)

            res.status(201).send({
                message:"User created successfully"
            })
        }
        else
        {
            res.status(400).send({
                message:`User with email ${req.body.email} already exists`
            })
        }
       
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error",
            error
        })
    }
}

const login = async(req,res)=>{
    try {
        let user = await userModel.findOne({email:req.body.email});
        if(user)
        {
            //validate pwd
            if(await auth.hashCompare(req.body.password,user.password))
            {
                let payload = {
                    _id:user._id,
                    firstName:user.firstName,
                    lastName:user.lastName,
                    email:user.email,
                    role:user.role,
                    userId:user.userId
                }
                let token = await auth.createToken(payload)
                res.status(200).send({
                    message:"Login Successfull",
                    token,
                    role:user.role
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
    login,
    signup,
    getAllUsers
}