import express from 'express'
import BlogRoutes from './blog.js'
import UsersRoutes from './users.js'
const router = express.Router()

router.get('/',(req,res)=>res.status(200).send(`<h1>BlogApp Backend</h1><p>The application is running successfully</p>`))

router.use('/blog',BlogRoutes)
router.use('/user',UsersRoutes)


export default router