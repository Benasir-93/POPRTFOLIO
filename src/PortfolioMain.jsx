import React from 'react'
import './PortfolioMain.css'
import Footer from './Footer'

function PortfolioMain() {
  return (
  <>
  {/* i removed fixed-top in nav bar */}

{/* banner image */}
<div className='background-image-container'>
  <div className='image-text ms-5'>
 <h2> Hi, I'm Benasir Begam.</h2>
 <h3 className='mb-5'>  A passionate Front-end React Developer </h3> 
 <span className=''>
    
    <a href="https://www.linkedin.com/in/ibrahim-faizal-755260288/" target='blank' className='text-white'><i class="fa fa-linkedin-square fa-3x fa-sm-2x me-2" aria-hidden="true"></i></a>

    <a href="https://github.com/Benasir-93" className='text-white' target='blank' > <i class="fa fa-github-square fa-3x" aria-hidden="true"></i></a>
</span> </div>
</div>
<Footer></Footer>
</>
  )
}

export default PortfolioMain