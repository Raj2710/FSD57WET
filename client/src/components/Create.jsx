import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import Post from './common/Post'
import AxiosService from '../utils/AxiosService';
import ApiRoutes from '../utils/ApiRoutes';
import { useNavigate } from 'react-router-dom';
const allowedExtensions = ['png','jpg','jpeg']
function Create() {
  let [title,setTitle] = useState("")
  let [image,setImage] = useState("")
  let [description,setDesc] = useState("")
  let navigate = useNavigate()

  const handleSubmit = async()=>{
    try{
      let {message} = await AxiosService.post(ApiRoutes.CREATE_BLOG.path,{title,image,description},{authenticate:ApiRoutes.CREATE_BLOG.auth})
      toast.success(message)
      navigate('/blogs')
    }
    catch(error){
      toast.error(error.message || "Internal Server Error")
    }
  }

  const validateExtension = (name)=>{
    
    const extension = name.split('.')[name.split('.').length-1]
    return allowedExtensions.includes(extension)
  }

  const selectFile = (event)=>{
    const selectedFile = event.target.files[0]
    if(validateExtension(selectedFile.name))
    {
      // const objUrl = URL.createObjectURL(selectedFile)
      // console.log(objUrl)
      let reader = new FileReader()

      reader.readAsDataURL(selectedFile)

      reader.onload = ()=>{
        setImage(reader.result)
      }
    }
    else{
      toast.error(`Only File Type of ${allowedExtensions.join(',')} are allowed`)
    }
  }
  return <div className='create-wrapper'>
    <div className='section-form'>
      <Form>
        <Form.Group className="mb-3" >
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Tilte" onChange={(e)=>setTitle(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" onChange={selectFile}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as='textarea'  placeholder="Write your thoughts!"
          style={{ height: '100px' }} onChange={(e)=>setDesc(e.target.value)}/>
        </Form.Group>
        
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
    <div className='section-preview'>
        <h3 style={{textAlign:"center"}}>Preview</h3>
        <Post title={title} description={description} image={image}/>
    </div>
  </div>
}

export default Create