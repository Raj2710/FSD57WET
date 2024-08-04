import Login from '../components/Login'
import Home from '../components/Home'
import Dashboard from '../components/Dashboard'
import Create from '../components/Create'
import Blogs from '../components/Blogs'
import ProtectedRoute from './ProtectedRoute'
import AdminGuard from './AdminGuard'
import TopBar from '../components/common/TopBar'
import {Navigate} from 'react-router-dom'

export default [
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/home',
        element:<ProtectedRoute><TopBar/><Home/></ProtectedRoute>
    },
    {
        path:'/dashboard',
        element:<AdminGuard><ProtectedRoute><TopBar/><Dashboard/></ProtectedRoute></AdminGuard>
    },
    {
        path:'/create',
        element:<ProtectedRoute><TopBar/><Create/></ProtectedRoute>
    },
    {
        path:'/blogs',
        element:<ProtectedRoute><TopBar/><Blogs/></ProtectedRoute>
    },
    {
        path:'*',
        element:<Navigate to='/login'/>
    }
]