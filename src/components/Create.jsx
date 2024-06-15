import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo } from '../redux/TodoSlice';
import { useSearchParams } from 'react-router-dom';
import { findIndexById } from '../utils/Helper';

function Create() {
  let [title,setTitle] = useState("")
  let [description,setDesc] = useState("")

  let todo = useSelector((state)=>state.todo)
  let dispatch = useDispatch()

  let [searchParams, setSearchParams] = useSearchParams();
  let id = searchParams.get("id")
  
  const handleSubmit = ()=>{
   if(id){
      dispatch(editTodo({
        id,
        title,
        description
      }))
   }
   else{
    dispatch(addTodo({
      title,
      description
    }))
   }
    setSearchParams({})
    setTitle("")
    setDesc("")
  }

  useEffect(()=>{
    if(id)
    {
      let index = findIndexById(todo,Number(id))
      setTitle(todo[index].title)
      setDesc(todo[index].description)
    }
  },[searchParams])
  return <div className='container'>
         <Form className='row'>
            <Form.Group className="mb-3 col-sm-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3 col-sm-6">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Enter Description" value={description} onChange={(e)=>setDesc(e.target.value)}/>
            </Form.Group>

            <Form.Group className="col-sm-3 mt-30">
              <Button variant="primary" onClick={()=>handleSubmit()}>
                Submit
              </Button>
            </Form.Group>
          </Form>
    </div>
}
export default Create
