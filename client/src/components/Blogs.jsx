import React,{useEffect,useState} from 'react'
import Table from 'react-bootstrap/Table';
import AxiosService from '../utils/AxiosService';
import ApiRoutes from '../utils/ApiRoutes';
import toast from 'react-hot-toast';
import placeholder from '../assets/placeholder.jpg'
function Blogs() {

  let [blogs,setBlogs] = useState([])
  let color = {Approved:'green', Pending:'#ffc107', Rejected:'red'}
  const getData = async()=>{
    try {
      let {data,message} = await AxiosService.get(ApiRoutes.GET_ALL_BLOGS_BY_USER_ID.path,{authenticate:ApiRoutes.GET_ALL_BLOGS_BY_USER_ID.auth})
      setBlogs(data)
      toast.success(message)
    } catch (error) {
      console.log(error)
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
          <th>Status</th>
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
              <td style={{color:`${color[blog.status]}`}}>{blog.status}</td>
            </tr>
          })
        }
      </tbody>
    </Table>
  </>
}

export default Blogs