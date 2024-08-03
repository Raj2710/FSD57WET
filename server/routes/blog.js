import express from 'express'
import verify from '../middleware/verify.js'
import verifyAdmin from '../middleware/verifyAdmin.js'
import { BlogController } from '../controllers/index.js'

const router = express.Router()

router.get('/getAllBlogs',verify,verifyAdmin,BlogController.getAllBlogs)
router.get('/getAllApprovedBlogs',verify,BlogController.getAllApprovedBlogs)
router.get('/getAllBlogsByUserId',verify,BlogController.getAllBlogsByUserId)
router.post('/createBlog',verify, BlogController.createBlog)
router.put('/changeStatus/:blogId',verify,verifyAdmin,BlogController.changeStatus)

export default router

