import employeeModel from '../model/employeeModel.js'

const getAllEmployee = async(req,res)=>{
    try {
        let users = await employeeModel.find({},{password:0});
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

const createEmployee = async(req,res)=>{
    try {
        let user = await employeeModel.findOne({email:req.body.email})
        if(!user)
        {
            await employeeModel.create(req.body)

            res.status(201).send({
                message:"Employee Created Successfully"
            })
        }
        else
        {
            res.status(400).send({
                message:`Employee with email ${req.body.email} already exists`
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
    getAllEmployee,
    createEmployee
}