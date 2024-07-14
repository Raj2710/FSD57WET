import {findIndexById} from '../common/helper.js'
import userModel from '../model/userModel.js'
import {ObjectId} from 'mongodb'
const users = [
    {
        id:1,
        name:"Nagarajan",
        email:"naga@gmail.com",
        dob:"27-11-1990",
        age:34
    },
    {
        id:2,
        name:"Arun",
        email:"arun@gmail.com",
        dob:"27-11-1993",
        age:31
    },
    {
        id:3,
        name:"Bala",
        email:"bala@gmail.com",
        dob:"27-11-1980",
        age:45
    }
]
const getAllUsers = async(req,res)=>{
    try {
        let users = await userModel.findAll()
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

const getUserById = async (req,res)=>{
    try {
        const {id} = req.params;

        let user = await userModel.findByFilter({_id:ObjectId.createFromHexString(id)})

        if(user){
            res.status(200).send({
                message:"Data Fetch Successfull",
                data:user
            })
        }
        else
        {
            res.status(400).send({
                message:"Invalid User Id"
            })
        }
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error",
            error
        })
    }
}


const createUser = async(req,res)=>{
    try {

        let user = await userModel.findByFilter({email:req.body.email})
        if(!user){
            let dob = new Date(req.body.dob)
            let today = new Date()
            req.body.age = Math.abs(today.getFullYear() - dob.getFullYear())

            await userModel.insertOne(req.body)

            res.status(201).send({
                message:"Data Saved Successfull"
            })
        }
        else
        {
            res.status(400).send({
                message:`User with email ${req.body.email} already exists!`
            })
        }
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error",
            error
        })
    }
}

const editUserById = async(req,res)=>{
    try {
        const {id} = req.params;
        let user = await userModel.findByFilter({_id:ObjectId.createFromHexString(id)})
        if(user){
            let dob = new Date(req.body.dob)
            let today = new Date()
            req.body.age = Math.abs(today.getFullYear() - dob.getFullYear())
            
            await userModel.editById({_id:ObjectId.createFromHexString(id)},req.body)

            res.status(200).send({
                message:"Data Updated Successfully"
            })
        }
        else
        {
            res.status(400).send({
                message:"Invalid User Id"
            })
        }
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error",
            error
        })
    }
}

const deleteUserById = async(req,res)=>{
    try {
        const {id} = req.params;
        let user = await userModel.findByFilter({_id:ObjectId.createFromHexString(id)})
        if(user){
            await userModel.deleteById({_id:ObjectId.createFromHexString(id)})
            res.status(200).send({
                message:"Data Deleted Successfully"
            })
        }
        else
        {
            res.status(400).send({
                message:"Invalid User Id"
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
    getAllUsers,
    getUserById,
    createUser,
    editUserById,
    deleteUserById
}