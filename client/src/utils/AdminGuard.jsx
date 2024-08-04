import React from 'react'
import { Navigate } from 'react-router-dom'

export default function AdminGuard({children}) {

    let role = sessionStorage.getItem('role')
    
    return role==='Admin'?children:<Navigate to='/login'/>
}
