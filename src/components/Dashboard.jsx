import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import useLogout from '../hooks/useLogout'
import axios from 'axios'
import ApiRoutes from '../utils/ApiRoutes'
import config from '../utils/config'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap'
import TopBar from './common/TopBar'

function Dashboard() {

  let logout = useLogout()
  let token = sessionStorage.getItem('token')
  let [data,setData] = useState([])

  const getData = async()=>{
    try {
        let res = await axios.get(`${config.API_URL}${ApiRoutes.GET_ALL_BOOKING.path}/2024-07-28`,{
          headers:{
            Authorization:`Bearer ${token}`
          }
        })
        if(res.status===200)
        {
          toast.success(res.data.message)
          setData(res.data.data)
        }
    } catch (error) {
      // console.log(error)
      toast.error(error.response.data.message)
    }
  }

  const requestCancelation = async(bookingId)=>{
    try {
      let res = await axios.put(`${config.API_URL}${ApiRoutes.CANCEL_BOOKING.path}/${bookingId}`,{},{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      if(res.status===200)
      {
        toast.success(res.data.message)
        getData()
      }
  } catch (error) {
    // console.log(error)
    toast.error(error.response.data.message)
  }
  }

  useEffect(()=>{
    getData()
  },[])

  return <>
    <TopBar/>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Room Name</th>
          <th>Date</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Employee Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
       {
        data.map((e,i)=>{
          return <tr key={i}>
            <td>{i+1}</td>
            <td>{e.roomName}</td>
            <td>{new Date(e.startTime).toLocaleDateString()}</td>
            <td>{new Date(e.startTime).toLocaleTimeString()}</td>
            <td>{new Date(e.endTime).toLocaleTimeString()}</td>
            <td>{e.empName}</td>
            <td><Button variant='danger' onClick={()=>requestCancelation(e.bookingId)}>Cancel</Button></td>
          </tr>
        })
       }
      </tbody>
    </Table>
  </>
}

export default Dashboard