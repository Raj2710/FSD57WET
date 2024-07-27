import Login from "../components/Login";
import { Navigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Profile from "../components/Profile";
import ProtectedRoute from "./ProtectedRoute";
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
        path:'/profile/:id',
        element:<ProtectedRoute><Profile/></ProtectedRoute>
    },
    {
        path:'*',
        element:<Navigate to='/login'/>
    }
]