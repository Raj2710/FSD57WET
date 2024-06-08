import React,{useState} from 'react'
import { Button } from 'react-bootstrap'

function Recap() {
    let [input,setInput] = useState("")
  return <div className='container'>
    <div className='row'>
        <div className='col'>
            <label>Input:</label>
            <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
        </div>
        <Output input={input} setInput={setInput}/>
    </div>

  </div>
}

export default Recap


function Output(props)
{
    let handleReset = ()=>{
        props.setInput("")
    }
    return  <div className='col'>
    Output: {props.input}
    <Button onClick={handleReset}>Reset</Button>
</div>
}