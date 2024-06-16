import React from 'react'
import { Form } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function SampleForm() {

    const SignUpSchema = Yup.object().shape({
        email:Yup.string().email("Enter a Valid Email Id").required("Required"),
        password:Yup.string().required("Required").min(8,"Password should minimum have 8 characters")
    })

    const formik = useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema:SignUpSchema,
        onSubmit:values=>{
            alert(JSON.stringify(values));
        }
    })
  return (
    <div>
       <Form onSubmit={formik.handleSubmit}>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Enter email" 
        name="email"
        id="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value = {formik.values.email}
        />
        {formik.errors.email && formik.touched.email ? <div style={{color:"red"}}>{formik.errors.email}</div>:<></>}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
         name="password"
         id="password"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value = {formik.values.password}/>

        {formik.errors.password && formik.touched.password? <div style={{color:"red"}}>{formik.errors.password}</div>:<></>}
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default SampleForm
