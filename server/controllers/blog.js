import { randString } from "../common/helper.js"
import blogModel from "../models/blog.js"

const getAllBlogsQuery = [
    {
        $lookup:{
            from:'users',
            localField:'userId',
            foreignField:'userId',
            as:'user_details'	
        }
    },
    {
        $project:{
            blogId:1,
            title:1,
            image:1,
            description:1,
            firstName:'$user_details.firstName',
            lastName:'$user_details.lastName'
        }
    },
    {$unwind:'$firstName'},
    {$unwind:'$lastName'},
    {
      $project:{
            blogId:1,
            title:1,
            image:1,
            description:1,
            name:{$concat:["$firstName"," ","$lastName"]}
        }
    }
]

const getAllBlogs = async (req,res)=>{
    try {
        let blogs = await blogModel.aggregate(getAllBlogsQuery)
        res.status(200).send({
            message:"Data Fetch Successfull",
            data:blogs
        })
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error",
            error
        })
    }
}

const getAllBlogsByUserId = async(req,res)=>{
    try {
        let blogs = await blogModel.find({userId:req.headers.userId})
        res.status(200).send({
            message:"Data Fetch Successfull",
            data:blogs
        })
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error",
            error
        })
    }
}

const getAllApprovedBlogs = async(req,res)=>{
    try {
        let blogs = await blogModel.aggregate([{
            $match:{status:'Approved'}
        },...getAllBlogsQuery])
        res.status(200).send({
            message:"Data Fetch Successfull",
            data:blogs
        })
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error",
            error
        })
    }
}

const createBlog = async(req,res)=>{
    try {

        req.body.blogId = randString(9)
        req.body.userId = req.headers.userId

        await blogModel.create(req.body)
        res.status(201).send({
            message:'Blog created and awaiting approval'
        })
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error",
            error
        })
    }
}

const changeStatus = async(req,res)=>{
    try {
        let {blogId} = req.params
        let blog = await blogModel.findOne({blogId:blogId})
        if(blog)
        {
            blog.status = req.body.status

            blog.save()

            res.status(200).send({
                message:"Blog Updated Successfully"
            })
        }
        else
        {
            res.status(400).send({
                message:"Invalid blogId"
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
    getAllBlogs,
    getAllApprovedBlogs,
    createBlog,
    changeStatus,
    getAllBlogsByUserId
}