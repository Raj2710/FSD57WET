import {Router} from 'express'
import employeeRoutes from './employee.js'

const routes = Router()

routes.get('/',(req,res)=>{
    res.send(`<div>
            <h1>Welcome to Backend of LetChat App</h1>
            <p>Please refer postman collections for API endpoints</p>
        </div>`)
})

routes.use('/employee',employeeRoutes);


export default routes