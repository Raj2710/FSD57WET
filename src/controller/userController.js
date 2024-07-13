import express from 'express'
import userService from '../service/userService.js'

const userController = express.Router()


userController.get('/',userService.getAllUsers)
userController.get('/:id',userService.getUserById)
userController.post('/',userService.createUser)


export default userController