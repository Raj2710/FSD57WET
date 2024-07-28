import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import toast from 'react-hot-toast';
import config from '../utils/config';
import ApiRoutes from '../utils/ApiRoutes';
import { useNavigate } from 'react-router-dom';
function Login() {
  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")
    let navigate = useNavigate()
  useEffect(()=>{
    sessionStorage.clear()
  },[])

  const handleLogin = async()=>{
    try {
      let res =  await axios.post(`${config.API_URL}${ApiRoutes.LOGIN.path}`,{  
        email,
        password
      })

      if(res.status===200)
      {
        toast.success(res.data.message)
        sessionStorage.setItem('token',res.data.token)
        sessionStorage.setItem('role',res.data.role)
        if(res.data.role==='Admin' || res.data.role==="Employee")
            navigate('/dashboard')
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  return (
    <div className='container'>
       <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" onClick={()=>handleLogin()}>
          Submit
        </Button>
    </Form>

    </div>
  )
}

export default Login