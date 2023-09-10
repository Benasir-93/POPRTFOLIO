import React from 'react'
import  './AboutMe.css'
import Resume from './Resume'
import Footer from './Footer'
import ResumePDF from './ResumePDF'


function AboutMe() {
  return (
<div className='aboutbg'>
<h1>Tech Stack</h1>
<div className='container'>
<div class="card shadow-lg">
  <div class="card-body">
<h1 className='text-info'>About Me</h1> 
<p  className="lh-lg">I am a beginner front-end developer and I am skilled in HTML, CSS and JavaScript web development, as well as the React framework. I am studying as <b> MERN stack devloper in GUVI</b>. I am looking to gain valuable experience in an IT environment and expand my competence. I am ready for challenges and eager to learn and acquire new skills.
</p> 
<p  className="lh-lg">I studied +2 in Crescent girls higher secondary school in Ambagarathur, Karaikal. I completed my first year of <b>BCA in Alagappa University.</b> I can't completed my studies because of some personal matter. <b>I strongly believe that, the degree is not determined someones skill.</b></p></div>
</div>
</div>
<br />
<div className='container'>
  <h1 className='text-center'>My Resume</h1>
<Resume></Resume>
<hr />
<ResumePDF></ResumePDF>
</div>
<Footer></Footer>
</div>  )
}

export default AboutMe