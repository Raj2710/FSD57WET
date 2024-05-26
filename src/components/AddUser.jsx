import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function AddUser({data,setData}) {
    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [mobile,setMobile] = useState("")
    let [batch,setBatch] = useState("")

    let navigate = useNavigate()

    const handleSubmit = ()=>{
        let id = data.length?data[data.length-1].id+1:1
        let newUser = {
            id,
            name,
            email,
            mobile,
            batch
        }
        
        let newArray = [...data]//deep copy
        newArray.push(newUser)//add the user
        setData(newArray)//update the state using state Fn

        navigate('/')
    }

  return  <div id="content-wrapper" className="d-flex flex-column">
  <div id="content">
      <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Add User</h1>
          </div>
          <div className='row'>
          <Form>
                 <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" 
                    onChange={(e)=>setName(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="text" placeholder="Enter Mobile" onChange={(e)=>setMobile(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Batch</Form.Label>
                    <Form.Control type="text" placeholder="Enter Batch" onChange={(e)=>setBatch(e.target.value)}/>
                </Form.Group>
               
                <Button variant="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
          </div>
      </div>
  </div>
</div>
}

export default AddUser
