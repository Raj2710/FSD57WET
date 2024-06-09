import { Actions } from "./Actions"
import { findIndexById } from "./Helper"

export const initialState = [
  {
    id:1,
    name:"Nagarajan",
    email:"naga@gmail.com",
    mobile:"987654321",
    batch:"FSD57"
  },
  {
    id:2,
    name:"Raj",
    email:"raj@gmail.com",
    mobile:"123456789",
    batch:"FSD57"
  },
  {
    id:3,
    name:"Arun",
    email:"arun@gmail.com",
    mobile:"789783378",
    batch:"FSD58"
  },
  {
    id:4,
    name:"Khaleel",
    email:"khaleel@gmail.com",
    mobile:"5432178789",
    batch:"FSD58"
  }
]

export function reducer(state,action){
    switch(action.type)
    {
        case Actions.ADD_USER:{
          let index = findIndexById(action.payload.id)
          state.push(action.payload)
          return [...state]
        }
        case Actions.EDIT_USER:{
          let index = findIndexById(action.payload.id)
          state.splice(index,1,action.payload)
          return [...state]
        }
        case Actions.DELETE_USER : {
          let index = findIndexById(state,action.payload)
          if(index!==-1)
          {
              state.splice(index,1)
              return [...state]
          }
          else
            return [...state]
        }
  
        default : return [
          ...state
        ]
    }
}