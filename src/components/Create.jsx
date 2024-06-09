import React,{useState} from 'react'
import {Button,Form} from 'react-bootstrap';
import Feed from './common/Feed';
import AxiosService from '../utils/AxiosService';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import ApiRoutes from '../utils/ApiRoutes';

function Create() {

  let [image,setImage] = useState("")
  let [title,setTitle] = useState("")
  let [description,setDescription] = useState("")
  let navigate = useNavigate()

  let handleSubmit = async()=>{
    // fetch("https://66371215288fedf6937f559e.mockapi.io/blogapp",{
    //   method:"POST",
    //   headers:{
    //     "Content-Type":"application/json"
    //   },
    //   body:JSON.stringify({image,title,description,status:true})
    // })
    // .then(res=>res.json())
    // .then(data=>console.log(data))
    // .catch(error=>console.error(error))

    try{
      let response = await AxiosService.post(ApiRoutes.BLOG_APP.path,{image,title,description,status:true})
      if(response.status===201)
      {
        toast.success("Blog posted successfully!!")
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
        <Form.Control type="text" placeholder="Enter Title" onChange={(e)=>setTitle(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Image Url</Form.Label>
        <Form.Control type="text" placeholder="Image url" onChange={(e)=>setImage(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control 
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
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

export default Create
