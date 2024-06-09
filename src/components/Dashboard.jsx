import React,{useEffect, useState} from 'react'
import {Button, Table} from 'react-bootstrap';
import toast from 'react-hot-toast';
import placeholder from '../assets/placeholder.png'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';
import ApiRoutes from '../utils/ApiRoutes';
import AxiosService from '../utils/AxiosService';

function Dashboard() {
  
  let [data,setData] = useState([])
  let navigate = useNavigate()
  let getData = async()=>{
    try {
      let response = await AxiosService.get(ApiRoutes.BLOG_APP.path)
      if(response.status===200)
      {
          setData(response.data)
      } 
    } catch (error) {
        toast(error.response.message || "Internal Server Error")
    }
  }

  useEffect(()=>{
    getData()
  },[])

  let handleDelete = async(id)=>{
    try {
      let response = await AxiosService.delete(`${ApiRoutes.BLOG_APP.path}/${id}`)
      if(response.status===200)
      {
        toast.success("Data Deleted Successfully")
        getData()
      }
    } catch (error) {
      toast(error.response.message || "Internal Server Error")
    }
  }

  return <div className='container'>
  <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Image</th>
          <th>Description</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((e,i)=>{
            return <tr key={i}>
              <td>{i+1}</td>
              <td>{e.title}</td>
              <td style={{"textAlign":"center"}}><img src={e.image?e.image:placeholder} height="50px" width="50px"/></td>
              <td ><div className='description'>{e.description}</div></td>
              <td>{e.status?"Active":"Inactive"}</td>
              <td>
                <EditIcon onClick={()=>navigate(`/feed/${e.id}`)}/>
                <DeleteForeverIcon onClick={()=>handleDelete(e.id)}/>
              </td>
            </tr>
          })
        }
      </tbody>
    </Table>
</div>
}

export default Dashboard
