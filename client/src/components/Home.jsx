import React, { useEffect, useState } from 'react'
import Post from './common/Post'
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
function Home() {
  let [blogs,setBlogs] = useState([])

  let getData = async()=>{
    try {
        let {data} = await AxiosService.get(ApiRoutes.GET_ALL_APPROVED_BLOGS.path,{authenticate:ApiRoutes.GET_ALL_APPROVED_BLOGS.auth}) 
        setBlogs(data)
    } catch (error) {
      toast.error(error.message || "Internal Server Error")
    }
  }

  useEffect(()=>{
    getData()
  },[])
  return <div className='home-wrapper'>
    {
      blogs.map((blog)=>{
        return <Post
        title={blog.title}
        image={blog.image}
        description={blog.description}
        name={blog.name}
        key={blog.blogId}
        />
      })
    }
  </div>
}

export default Home