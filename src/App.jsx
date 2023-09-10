import React from 'react'
import {BrowserRouter as Router,Route,Link, Routes } from 'react-router-dom' 
import './App.css'
import PortfolioMain from './PortfolioMain'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Project from './Project'

function App() {

  return (
<Router>
{/* 
<nav className="navbar navbar-expand-md">
  <div className="container-fluid">
    <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul className="navbar-nav mx-auto px-5">
        <li className="nav-item">
          <Link to="/contact" className="nav-link text-white bg-danger">
            <b>All Book Detail</b>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link text-white bg-danger">
contact          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Benasir Portfolio</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
          </li>
          <li className="nav-item">
          <Link to="/about" className="nav-link ">About me</Link></li>

          <li className="nav-item">
          <Link to="/contact" className="nav-link ">Contact</Link></li> 
          
          <li className="nav-item">
          <Link to="/project" className="nav-link ">Project</Link></li>
       </ul>
      </div>
    </div>
  </div>
</nav>

   <Routes>
        <Route path="/" element={<PortfolioMain />}></Route>
        <Route path="/about" element={<AboutMe />}></Route>

        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/project" element={<Project />}></Route>


      </Routes>
      </Router> 
       )
}

export default App
