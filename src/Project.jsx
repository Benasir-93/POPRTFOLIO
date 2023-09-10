import React from 'react'
import './Project.css'
import Footer from './Footer'


function Project() {
  return (
    <div className='bgproject'>
    <h1 className='text-center text-white mb-5 mb-lg-5 fs-1 fw-bold p-5 text-decoration-underline'>My Projects</h1>
    <div class="card mx-5">
  <div class="card-body">
<h2>Below you can see my projects, check out the live demos on netlify and code on GitHub
</h2>  </div>
</div>

{/* card of projects */}

<div className="card mb-3 mt-5 w-75 mx-auto mb-3 mb-lg-5"  >
  <div className="row g-0">
    <div className="col-md-6 ">
      <img src="/image/library.JPG" className="card-img rounded-start h-100" alt="..."/>
    </div>
    <div className="col-md-6">
      <div className="card-body fs-4">
        <h5 className="card-title text-danger fw-bold">Project 1</h5>
        <p className='card-text'>This is <b>LIBRARY MANAGEMENT SYSTEM</b> project. I created in <strong>React js</strong> with json server. In this project we can perform crud operation.</p>
<span className='card-text m-3'>
  <a href="https://bright-cat-72469e.netlify.app/" target='blank' className='me-5'><img src="/image/netlify.png" alt="" /></a>
<a href="https://github.com/Benasir-93/library-formik.git" target='blank'><img src="/image/github.png" alt="" /></a>
</span>
      </div>
    </div>
  </div>
</div>

<div className="card mb-3 mt-5 w-75 mx-auto mb-3 mb-lg-5"  >
  <div className="row g-0">
    <div className="col-md-6 ">
      <img src="/image/ortho.JPG" className="card-img rounded-start h-100" alt="..."/>
    </div>
    <div className="col-md-6">
      <div className="card-body fs-4">
        <h5 className="card-title text-danger fw-bold">Project 2</h5>
        <p className='card-text'>This is <b>Othocare Hospital in bahrain</b>. I simply recreate their live website with help of <b>html, css, js, bootstrap.</b> Click the below icon to see the demo site.</p>
<span className='card-text m-3'>
  <a href="https://glittering-platypus-81471a.netlify.app/" target='blank' className='me-5'><img src="/image/netlify.png" alt="" /></a>
<a href="https://github.com/Benasir-93/orthocare.git" target='blank'><img src="/image/github.png" alt="" /></a>
</span>
      </div>
    </div>
  </div>
</div>

<div className="card mb-3 mt-5 w-75 mx-auto mb-3 mb-lg-5"  >
  <div className="row g-0">
    <div className="col-md-6 ">
      <img src="/image/router.JPG" className="card-img rounded-start h-100" alt="..."/>
    </div>
    <div className="col-md-6">
      <div className="card-body fs-4">
        <h5 className="card-title  text-danger fw-bold">Project 3</h5>
        <p className='card-text'>This is the <b>Landing page GUVI site</b> . I created this site with the help of <strong>React js, React Router DOM</strong>. That's why i think it looks nice.</p>
<span className='card-text m-3'>
  <a href="https://tangerine-quokka-1c8c04.netlify.app/" target='blank' className='me-5'><img src="/image/netlify.png" alt="" /></a>
<a href="https://github.com/Benasir-93/react-router.git" target='blank'><img src="/image/github.png" alt="" /></a>
</span>
      </div>
    </div>
  </div>
</div>

<div className="card mb-3 mt-5 w-75 mx-auto mb-3 mb-lg-5"  >
  <div className="row g-0">
    <div className="col-md-6 ">
      <img src="/image/ecommerce.JPG" className="card-img rounded-start h-100" alt="..."/>
    </div>
    <div className="col-md-6">
      <div className="card-body fs-4">
        <h5 className="card-title text-danger fw-bold">Project 1</h5>
        <p className='card-text'>This is <b>Ecommerce site home page</b> . I created this in<strong>React js</strong> with bootstrap. we can add to cart and remove from cart too.</p>
<span className='card-text m-3'>
  <a href="https://capable-croissant-804f30.netlify.app/" target='blank' className='me-5'><img src="/image/netlify.png" alt="" /></a>
<a href="https://github.com/Benasir-93/react-ecommerce.git" target='blank'><img src="/image/github.png" alt="" /></a>
</span>
      </div>
    </div>
  </div>
</div>

<Footer></Footer>
</div> 
)
}

export default Project