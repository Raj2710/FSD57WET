import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link, Outlet } from 'react-router-dom';

function NestedExample() {
  return <div id="content-wrapper" className="d-flex flex-column">
  <div id="content">
      <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Nested Example</h1>
          </div>
          <div className='row'>
            <p>Nested Routes are route in side route. For Example</p>
            <ul style={{listStylePosition:"inside"}}>
                <li>/nested-example is main route</li>
                <li>/nested-example/profile this is nested route</li>
                <li>/nested-example/settings this is nested route</li>
                <li>/nested-example/feed this is nested route</li>
            </ul>
          </div>
          <div className='row'>
          <Nav activeKey="">
            <Nav.Item>
                <Nav.Link><Link to='/nested-example/profile'>Profile</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link><Link to='settings'>Settings</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link><Link to='feed'>Feed</Link></Nav.Link>
            </Nav.Item>
            </Nav>
          </div>

          <div className='row' >
                <Outlet/>
          </div>
      </div>
  </div>
</div>
}

export default NestedExample
