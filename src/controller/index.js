import express from 'express'
import userController from './userController.js'

const controller = express.Router()


controller.use('/user',userController)

export default controller