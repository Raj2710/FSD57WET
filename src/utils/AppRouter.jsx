import Create from '../components/Create'
import Dashboard from '../components/Dashboard'
import Home from '../components/Home'
import View from '../components/View'
import TopBar from '../components/TopBar'
import SampleForm from '../components/SampleForm'
import { Navigate } from 'react-router-dom'
const AppRouter = [
    {
        path:'/',
        element:<><TopBar/><Home/></>
    },
    {
        path:'/dashboard',
        element:<><TopBar/><Dashboard/></>
    },
    {
        path:'/create',
        element:<><TopBar/><Create/></>
    },
    {
        path:'/feed/:id',
        element:<><TopBar/><View/></>
    },
    {
        path:'/form',
        element:<><TopBar/><SampleForm/></>
    },
    {
        path:'/*',
        element:<Navigate to='/'/>
    }
]

export default AppRouter