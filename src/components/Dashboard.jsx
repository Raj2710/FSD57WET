import React,{useEffect, useState} from 'react'
import {Button, Table} from 'react-bootstrap';
import toast from 'react-hot-toast';
import placeholder from '../assets/placeholder.png'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';
import ApiRoutes from '../utils/ApiRoutes';
import AxiosService from '../utils/AxiosService';
import Form from 'react-bootstrap/Form';
import { useSelector,useDispatch } from 'react-redux';
import { save,edit,deleteById } from '../redux/BlogSlice';
function Dashboard() {
  
  let blogs = useSelector((state)=>state.blog.blogs)
  let dispatch = useDispatch()

  let navigate = useNavigate()
  let getData = async()=>{
    try {
      let response = await AxiosService.get(ApiRoutes.BLOG_APP.path)
      if(response.status===200)
      {
          dispatch(save(response.data))
      } 
    } catch (error) {
      console.log(error)
        toast(error.response?.message || "Internal Server Error")
    }
  }

  useEffect(()=>{
    getData()
  },[])

  let handleStatusChange = async(id,status)=>{
    dispatch(edit(id))
    try {
      let response = await AxiosService.put(`${ApiRoutes.BLOG_APP.path}/${id}`,{
        status:!status
      })
      if(response.status===200)
      {
        toast.success("Data Deleted Successfully")
        getData()
      }
      else{
        dispatch(edit(id))
      }
    } catch (error) {
      dispatch(edit(id))
      toast(error.response.message || "Internal Server Error")
    }
  }

  let handleDelete = async(id)=>{
    try {
      dispatch(deleteById(id))
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
          blogs.map((e,i)=>{
            return <tr key={i}>
              <td>{i+1}</td>
              <td>{e.title}</td>
              <td style={{"textAlign":"center"}}><img src={e.image?e.image:placeholder} height="50px" width="50px"/></td>
              <td ><div className='description'>{e.description}</div></td>
              <td> 
                <Form>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label={e.status?"Active":"Inactive"}
                    checked={e.status}
                    onChange={()=>handleStatusChange(e.id,e.status)}
                  />
                </Form>
            </td>
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
