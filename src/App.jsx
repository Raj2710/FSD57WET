import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import AddUser from './components/AddUser'
import ViewUser from './components/ViewUser'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import DashboardContextComponent from './context/DashboardContextComponent'
import NestedExample from './components/NestedExample'
import Profile from './components/NestedExample/Profile'
import Settings from './components/NestedExample/Settings'
import Feed from './components/NestedExample/Feed'
import Recap from './components/Recap'
import UseRef from './components/Hooks/UseRef'
import UseReducer from './components/Hooks/UseReducer'
export const UserContext = React.createContext()//creating the context

function App() {
  let [data,setData] = useState([
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
  ])

  
  return <>
  <div id="wrapper">
    <UserContext.Provider value = {{data,setData}}>
    <BrowserRouter>   
    <Sidebar/>
      <Routes>
        <Route path='/' element={<DashboardContextComponent>
                                    <Dashboard/>
                                  </DashboardContextComponent>}/>
        <Route path='/add-user' element={<AddUser/>}/>
        <Route path='/view-user/:id' element={<ViewUser/>}/>
        <Route path='/nested-example' element={<NestedExample/>}>
            <Route path='profile' element={<Profile/>}/> 
            <Route path='settings' element={<Settings/>}/>
            <Route path='feed' element={<Feed/>}/>
        </Route>
        <Route path='/recap' element={<Recap/>}/>
        <Route path='/hooks/useref' element={<UseRef/>}/>
        <Route path='/hooks/usereducer' element={<UseReducer/>}/>
        {/* <Route path="*" element={<Navigate to='/'/>}/> */}
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  </div>
  </>
}

export default App
