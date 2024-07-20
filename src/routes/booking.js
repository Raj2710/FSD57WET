import {Router} from 'express'
import bookingService from '../service/booking.js';
const routes = Router()

routes.get('/',bookingService.getAllBooking);

export default routes