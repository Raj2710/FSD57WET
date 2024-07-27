import {Router} from 'express'
import employeeService from '../service/employee.js'
import verify from '../middleware/verify.js'
import verifyAdmin from '../middleware/verifyAdmin.js'

const routes = Router()

routes.get('/',verify,verifyAdmin,employeeService.getAllEmployee);//only by Admin
routes.get('/:id',verify,employeeService.getEmployeeById);//only by an authenticated user
routes.post('/',employeeService.createEmployee);

export default routes