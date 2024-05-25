import React from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import AddUser from './components/AddUser'
import ViewUser from './components/ViewUser'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
function App() {
  return <>
  <div id="wrapper">
    <BrowserRouter>
    <Sidebar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/add-user' element={<AddUser/>}/>
        <Route path='/view-user' element={<ViewUser/>}/>
        <Route path="*" element={<Navigate to='/'/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  </>
}

export default App
