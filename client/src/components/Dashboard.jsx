import React,{useEffect,useState} from 'react'
import Table from 'react-bootstrap/Table';
import AxiosService from '../utils/AxiosService';
import ApiRoutes from '../utils/ApiRoutes';
import toast from 'react-hot-toast';
import placeholder from '../assets/placeholder.jpg'
import { Button } from 'react-bootstrap';

function Dashboard() {

  let [blogs,setBlogs] = useState([])
  let buttons = [
    {
      label:'Approve',
      variant:'success',
      status:["Pending","Rejected"],
      to:"Approved"
    },
    {
      label:'Reject',
      variant:'danger',
      status:["Pending","Approved"],
      to:"Rejected"
    }
  ]

  let color = {Approved:'green', Pending:'#ffc107', Rejected:'red'}

  const getData = async()=>{
    try {
      let {data,message} = await AxiosService.get(ApiRoutes.GET_ALL_BLOGS.path,{authenticate:ApiRoutes.GET_ALL_BLOGS.auth})
      setBlogs(data)
      toast.success(message)
    } catch (error) {
      toast.error(error.message || "Internal Server Error")
    }
  }

  const changeStatus = async(status,blogId)=>{
    try {
      let {message} = await AxiosService.put(`${ApiRoutes.CHANGE_STATUS.path}/${blogId}`,{status},{authenticate:ApiRoutes.CHANGE_STATUS.auth})
      toast.success(message)
      getData()
    } catch (error) {
      toast.error(error.message || "Internal Server Error")
    }
  }

  useEffect(()=>{
    getData()
  },[])
  return <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Image</th>
          <th>Description</th>
          <th>Author</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          blogs.map((blog,i)=>{
            return <tr key={blog.blogId}>
              <td>{i+1}</td>
              <td>{blog.title}</td>
              <td style={{"textAlign":"center"}}><img src={blog.image?blog.image:placeholder} height="50px" width="50px"/></td>
              <td className='col-6'><div className='description'>{blog.description}</div></td>
              <td>{blog.name}</td>
              <td style={{color:`${color[blog.status]}`}}>{blog.status}</td>
              <td>
                  {
                    buttons.map((e,i)=>{
                      return e.status.includes(blog.status) ? <Button className='mr-10' variant={e.variant} onClick={()=>changeStatus(e.to,blog.blogId)}>{e.label}</Button> : <></>
                    })
                  }
              </td>
            </tr>
          })
        }
      </tbody>
    </Table>
  </>
}

export default Dashboard