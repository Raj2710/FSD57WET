import {Router} from 'express'
import employeeRoutes from './employee.js'
import roomRoutes from './room.js'
import bookingRoutes from './booking.js'

const routes = Router()

routes.get('/',(req,res)=>{
    res.send(`<div>
            <h1>Welcome to Backend of LetChat App</h1>
            <p>Please refer postman collections for API endpoints</p>
        </div>`)
})

routes.use('/employee',employeeRoutes);
routes.use('/booking',bookingRoutes);
routes.use('/room',roomRoutes);


export default routes