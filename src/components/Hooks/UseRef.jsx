import React, { useEffect, useRef, useState } from 'react'
function UseRef() {
    let count = useRef(0)
    console.log(count)
    let [input,setInput] = useState("")
    let ref1 = useRef()
    let ref2 = useRef()
    let ref3 = useRef()
    let ref4 = useRef()

    useEffect(()=>{
        ref1.current.focus()
        count.current = count.current+1
    })

    const handleSubmit = ()=>{
        let otp = `${ref1.current.value}${ref2.current.value}${ref3.current.value}${ref4.current.value}`
        if(otp.length === 4 && otp == '1234'){
            alert('Valid Otp : '+otp )
            ref1.current.value=""
            ref2.current.value=""
            ref3.current.value=""
            ref4.current.value=""
            ref1.current.focus()

        }
        else
            alert("Invalid Otp")
    }

    let verify = (key)=>{
        if(key>='0' && key<='9')
            return true
        else
            return false
    }

  return (
    <div className='container'>
       <div className='row'>
            <label>Name</label>
            <input type='text' onChange={(e)=>setInput(e.target.value)} className='col-4'></input>
       </div>
      <div className='row'>
            <p>The entered Input is {input}</p>
            <h2>Component render for {count.current} times</h2>
      </div>
        <div className='row'>
            <h2>Enter OTP here</h2>
        </div>
      <div className='row'> 
            <input className='col-3' ref={ref1} onKeyUp={(e)=>{
                if(verify(e.key))
                    ref2.current.focus()
            }} type='number'></input>

            <input className='col-3' ref={ref2} onKeyUp={(e)=>{
                if(verify(e.key))
                    ref3.current.focus()
            }} onKeyDown={(e)=>{
                if(ref2.current.value==='' && e.key==='Backspace')
                    ref1.current.focus()
            }} type='number'></input>

            <input className='col-3' ref={ref3} onKeyUp={(e)=>{
                if(verify(e.key))
                    ref4.current.focus()
            }} onKeyDown={(e)=>{
                if(ref3.current.value==='' && e.key==='Backspace')
                    ref2.current.focus()
            }} type='number'></input>
            
            <input className='col-3' ref={ref4} onKeyUp={(e)=>{
                if(verify(e.key))
                    handleSubmit()
            }} onKeyDown={(e)=>{
                if(ref4.current.value==='' && e.key==='Backspace')
                    ref3.current.focus()
            }}type='number'></input>
      </div>
    </div>
  )
}
export default UseRef
