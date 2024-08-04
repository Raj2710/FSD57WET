import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import useLogout from '../hooks/useLogout';
function Login() {
  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")
  let navigate = useNavigate()
  let logout = useLogout()

  const handleSubmit = async()=>{
      try {
        let {message,token,role} = await AxiosService.post(`${ApiRoutes.LOGIN.path}`,{email,password},{authenticate:ApiRoutes.LOGIN.auth})
        sessionStorage.setItem('token',token)
        sessionStorage.setItem('role',role)
        toast.success(message)
        navigate('/home')
      } catch (error) {
          toast.error(error.message || "Internal Server Error")
      }
  }

  useEffect(()=>{
    logout()
  },[])

  return <div className='login-wrapper'>
      <h1 style={{textAlign:"center"}}>BlogApp Login Here</h1>
      <div className='form-wrapper'>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      </div>
  </div>
}

export default Login