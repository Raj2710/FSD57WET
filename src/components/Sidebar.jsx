import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar() {
  return <>
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
      </a>
      <hr className="sidebar-divider my-0" />
      <li className="nav-item">
        <Link to='/' className="nav-link">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>
      <hr className="sidebar-divider" /> 
      <div className="sidebar-heading">
        Interface
      </div>
      <li className="nav-item">
        <Link to='/add-user' className="nav-link collapsed">
          <i className="fas fa-fw fa-cog"></i>
          <span>Add User</span>
        </Link>
      </li>
      <hr className="sidebar-divider" />
    </ul>
  </>
}

export default Sidebar
