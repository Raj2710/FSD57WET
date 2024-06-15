import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { changeStatus } from '../redux/TodoSlice';
import { useSearchParams } from 'react-router-dom';
function TodoItem({data}) {

  let dispatch = useDispatch()
  let [searchParams, setSearchParams] = useSearchParams();
  return <div className='todo-item'> 
     <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{data.status?<s>{data.title}</s>:data.title}</Card.Title>
        <Card.Link onClick={()=>setSearchParams({id:data.id})}>Edit</Card.Link>
        <Form>
          <Form.Check // prettier-ignore
            type="switch"
            id="custom-switch"
            checked={data.status}
            onChange={()=>dispatch(changeStatus(data.id))}
          />
        </Form>
        <Card.Text>
          {data.status?<s>{data.description}</s>:data.description}
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
}

export default TodoItem
