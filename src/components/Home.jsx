import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
import Feed from './common/Feed'
function Home() {
  let [data,setData]=useState([])

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
  return <div className='home-wrapper'>
    {
      data.map((e)=>{
        return <div className='feeds'>
          <Feed
          title={e.title}
          image={e.image}
          description={e.description}
          />
        </div>
      })
    }
  </div>
}

export default Home
