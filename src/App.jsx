import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {addTodo} from './redux/TodoSlice'
import Create from './components/Create'
import TodoItem from './components/TodoItem'
function App() {
  let todo = useSelector((state)=>state.todo)
  let dispatch = useDispatch()
  
  return <>
    <div className='wrapper'> 
      <div className='header'>
          <h1>Todo App</h1>
      </div>
      <div className='body'>
        <div className='create'>
          <Create/>
        </div>
        <div className='todo'>
          {
            todo.map((e,i)=>{
              return <TodoItem key={i} data={e}/>
            })
          }
        </div>
      </div>
    </div>
  </>
}

export default App