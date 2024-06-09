import React,{useEffect, useState} from 'react'
import {Button,Form} from 'react-bootstrap';
import Feed from './common/Feed';
import AxiosService from '../utils/AxiosService';
import toast from 'react-hot-toast';
import { useNavigate,useParams } from 'react-router-dom';
import ApiRoutes from '../utils/ApiRoutes';

function View() {

  let [image,setImage] = useState("")
  let [title,setTitle] = useState("")
  let [description,setDescription] = useState("")
  let {id} = useParams()
  let navigate = useNavigate()

  let getData = async(id)=>{
    try {
        let response = await AxiosService.get(`${ApiRoutes.BLOG_APP.path}/${id}`)
        if(response.status===200)
        {
            setImage(response.data.image)
            setDescription(response.data.description)
            setTitle(response.data.title)
        }
    } catch (error) {
        toast.error(error.response.message || "Internal Server Error")
    }
  }

  useEffect(()=>{
    if(id)
      getData(id)
  },[])

  let handleSubmit = async()=>{
    try{
      let response = await AxiosService.put(`${ApiRoutes.BLOG_APP.path}/${id}`,{image,title,description})
      if(response.status===200)
      {
        toast.success("Blog Edited Successfully!!")
        navigate('/dashboard')
      }
    } 
    catch(error){
      toast.error(error.response.message || "Internal Server Error")
    }
  }

  return <div className='display-grid'>
    <div className='form-wrapper'>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title" value = {title} onChange={(e)=>setTitle(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Image Url</Form.Label>
        <Form.Control type="text" placeholder="Image url" value = {image} onChange={(e)=>setImage(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control 
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
          value = {description}
          onChange={(e)=>setDescription(e.target.value)}
          />
      </Form.Group>
      
      <Button variant="primary" onClick={handleSubmit}>
        Save
      </Button>
    </Form>
    </div> 
    <div className='preview-wrapper'>
      <h2>Preview</h2>
      <Feed 
      image={image}
      description={description}
      title={title}
      />
    </div>
</div>
}

export default View
