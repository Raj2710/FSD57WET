import { createSlice } from "@reduxjs/toolkit";
import {findIndexById} from '../utils/Helper'
export const todoSlice = createSlice({
    initialState:[{
            id:1,
            title:"Learn Redux",
            description:"Learn Redux",
            status:true,
        },
        {
            id:2,
            title:"Learn React",
            description:"Learn React",
            status:true,
        }],
    name:'todo',
    reducers:{
        addTodo:(state,action)=>{
           action.payload.id = state.length?state[state.length-1].id+1 : 1
           action.payload.status = false

           state.push(action.payload)
        },
        editTodo:(state,action)=>{
            let index = findIndexById(state,action.payload.id)
            action.payload.status = false
            state.splice(index,1,action.payload)
        },
        deleteTodo:(state,action)=>{

        },
        changeStatus:(state,action)=>{
            let index = findIndexById(state,action.payload)
            state[index].status = !state[index].status 
        }
    }
})

export const {addTodo,editTodo,deleteTodo,changeStatus} = todoSlice.actions

export default todoSlice.reducer