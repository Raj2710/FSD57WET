import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import useLogout from '../hooks/useLogout'
import axios from 'axios'
import ApiRoutes from '../utils/ApiRoutes'
import config from '../utils/config'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap'

function Dashboard() {

  let logout = useLogout()
  let token = sessionStorage.getItem('token')
  let [data,setData] = useState([])
  const getData = async()=>{
    try{
      let res = await axios.get(`${config.API_URL}${ApiRoutes.GET_ALL_USERS.path}`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })

      if(res.status===200)
      {
        setData(res.data.data)
      }
    }catch(error){
      toast.error(error.response.data.message)
      if(error.response.status === 401)
          logout()
    }
  }

  useEffect(()=>{
    if(token)
      getData()
    else
      logout()
  },[])
  return <>
  <Button onClick={()=>getData()}>Refresh</Button>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Role</th>
          <th>Status</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
      {
        data.map((e,i)=>{
          return <tr key={i}>
            <td>{i+1}</td>
            <td>{e.firstName}</td>
            <td>{e.lastName}</td>
            <td>{e.email}</td>
            <td>{e.mobile}</td>
            <td>{e.role}</td>
            <td>{e.status?"Active":"Inactive"}</td>
            <td>{e.createdAt}</td>
          </tr>
        })
      }
      </tbody>
    </Table>
  </>
}

export default Dashboard