import {Router} from 'express'
import userService from '../service/user.js'
const routes = Router()

routes.post('/login',userService.login)

export default routes