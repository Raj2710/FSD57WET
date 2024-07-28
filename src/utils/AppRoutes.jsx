import Login from "../components/Login";
import { Navigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import AdminGuard from '../utils/AdminGuard'
import Booking from '../components/booking'
import Employee from '../components/employee'
import CreateEmployee from '../components/employee/CreateEmployee'
import Room from '../components/room'
import CreateRoom from '../components/room/CreateRoom'
export default [
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/dashboard',
        element:<ProtectedRoute><Dashboard/></ProtectedRoute>
    },
    {
        path:'/booking',
        element:<ProtectedRoute><Booking/></ProtectedRoute>
    },
    {
        path:'/employee',
        element:<ProtectedRoute><AdminGuard><Employee/></AdminGuard></ProtectedRoute>
    },
    {
        path:'/employee/create',
        element:<ProtectedRoute><AdminGuard><CreateEmployee/></AdminGuard></ProtectedRoute>
    },
    {
        path:'/room',
        element:<ProtectedRoute><AdminGuard><Room/></AdminGuard></ProtectedRoute>
    },
    {
        path:'/room/create',
        element:<ProtectedRoute><AdminGuard><CreateRoom/></AdminGuard></ProtectedRoute>
    },
    {
        path:'*',
        element:<Navigate to='/login'/>
    }
]