import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    let [output,setOp] = useState("")
    let capturePassword = (e)=>{
        setPassword(e.target.value)
    }

    let handleSubmit = ()=>{
        setOp(`The email is ${email} with password ${password}`)
    }

    let reset = ()=>{
        setOp("")
        setEmail("")
        setPassword("")
    }
  return <>
   <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={capturePassword}/>
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
      <Button variant="warning" onClick={reset}>Reset</Button>
    </Form>
    <div style={{color:"red"}}>
        {output}
    </div>
  </>
}

export default App

// function App() {
//     //[state,stateFn]
//     let [state,stateFunction] = useState(0)
//   return <>
//     <button onClick={()=>{
//         stateFunction(state-1)
//     }}>-</button>
//         {state}
//     <button onClick={()=>{
//         stateFunction(state+1)
//     }}>+</button>

//     <button onClick={()=>stateFunction(0)}>Reset</button>
//   </>
// }


// function App() {
//     //[state,stateFn]
//     let [state,stateFunction] = useState(0)
//   return <>
//     <Button variant='primary' onClick={()=>{
//         stateFunction(state-1)
//     }}>-</Button>
//         {state}
//     <Button variant='danger' onClick={()=>{
//         stateFunction(state+1)
//     }}>+</Button>

//     <Button variant='info' onClick={()=>stateFunction(0)}>Reset</Button>
//   </>
// }