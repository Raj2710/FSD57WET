import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import useLogout from '../../hooks/useLogout';
let roleRoutes = [
  {
      path:'/dashboard',
      name:"Dashboard",
      role:["Admin","Employee"]
  },
  {
    path:'/booking',
    name:"Booking",
    role:["Employee"]
  },
  {
    path:'/employee',
    name:"Employee",
    role:["Admin"]
  },
  {
    path:'/room',
    name:"Room",
    role:["Admin"]
  }
]

function TopBar() {
  let routes = (()=>{
    let role = sessionStorage.getItem('role')
    return roleRoutes.filter((e)=>{
      return e.role.indexOf(role)!==-1
    })
  })();
  let navigate = useNavigate()
  let logout = useLogout()
  return <>
  <Navbar expand="lg" className="bg-body-tertiary justify-content-between" style={{marginLeft:"10px"}}>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {
              routes.map((e,i)=>{
                return <Nav.Link onClick={()=>navigate(e.path)}>{e.name}</Nav.Link>
              })
            }
          </Nav>
        </Navbar.Collapse>
        <Navbar.Text style={{marginRight:"10px"}}>
          <Button variant="danger"onClick={()=>logout()}>Logout</Button>
        </Navbar.Text>
    </Navbar>
  </>
}

export default TopBar