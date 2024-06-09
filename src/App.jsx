import React, { useReducer } from 'react'
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
// getting the reducer function and initial state from reducer file
import {reducer,initialState} from './components/utils/Reducer'

export const UserContext = React.createContext()//creating the context


function App() {
  let [data,dispatch] = useReducer(reducer,initialState)
  return <>
  <div id="wrapper">
    <UserContext.Provider value = {{data,dispatch}}>
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