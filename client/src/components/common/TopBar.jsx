import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import useLogout from '../../hooks/useLogout';
import { useLocation,useNavigate } from 'react-router-dom';

function TopBar() {
  let logout = useLogout()
  let navigate = useNavigate()
  let links = [
    {
      label:'Home',
      path:'/home',
      role:["Admin","User"]
    },
    {
      label:'Dashboard',
      path:'/dashboard',
      role:["Admin"]
    },
    {
      label:'Create Blog',
      path:'/create',
      role:["User","Admin"]
    },
    {
      label:'My Blogs',
      path:'/blogs',
      role:["User","Admin"]
    }
  ]

  let {pathname} = useLocation()
  let role = sessionStorage.getItem('role')
  return <>
     <Navbar expand="lg" className="bg-body-tertiary ml-10">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {
                links.map((link,i)=>{
                  return link.role.includes(role)?
                  <Nav.Link 
                  key={i}
                  onClick={()=>navigate(link.path)} 
                  className={link.path===pathname?'active':''}>{link.label}</Nav.Link>
                  :<React.Fragment key={i}></React.Fragment>
                })
              }
            </Nav>
          </Navbar.Collapse>
          <Button variant='danger' onClick={()=>logout()} className='mr-10'>Logout</Button>
    </Navbar>
  </>
}

export default TopBar