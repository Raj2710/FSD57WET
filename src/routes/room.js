import {Router} from 'express'
import roomService from '../service/room.js';
const routes = Router()

routes.get('/',roomService.getAllRooms);
routes.post('/',roomService.createRoom);
routes.put('/:roomId',roomService.editRoom);

export default routes