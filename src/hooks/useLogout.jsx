import React from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
function useLogout() {
    let navigate = useNavigate()
  return ()=>{
    toast.success("Logout Successfull")
    sessionStorage.clear()
    navigate('/login')
  }
}

export default useLogout