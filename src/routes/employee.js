import {Router} from 'express'
import employeeService from '../service/employee.js'
const routes = Router()

routes.get('/',employeeService.getAllEmployee);
routes.post('/',employeeService.createEmployee);

export default routes