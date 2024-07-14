import {findIndexById} from '../common/helper.js'
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
const getAllUsers = (req,res)=>{
    try {
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

const getUserById = (req,res)=>{
    try {
        const {id} = req.params;

        let index = findIndexById(users,Number(id))

        if(index!==-1){
            res.status(200).send({
                message:"Data Fetch Successfull",
                data:users[index]
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


const createUser = (req,res)=>{
    try {
        
        let dob = new Date(req.body.dob)
        let today = new Date()
        req.body.age = Math.abs(today.getFullYear() - dob.getFullYear())
        req.body.id = users.length ? users[users.length-1].id + 1 : 1;

        users.push(req.body)

        res.status(201).send({
            message:"Data Saved Successfull"
        })
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error",
            error
        })
    }
}

const editUserById = (req,res)=>{
    try {
        const {id} = req.params;

        let index = findIndexById(users,Number(id))

        if(index!==-1){
            let dob = new Date(req.body.dob)
            let today = new Date()
            req.body.age = Math.abs(today.getFullYear() - dob.getFullYear())
            req.body.id = Number(id)

            users.splice(index,1,req.body

            )
            res.status(200).send({
                message:"Data Updated Successfullynpmn ",
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

const deleteUserById = (req,res)=>{
    try {
        const {id} = req.params;

        let index = findIndexById(users,Number(id))

        if(index!==-1){

            users.splice(index,1)
            
            res.status(200).send({
                message:"Data Deleted Successfully",
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