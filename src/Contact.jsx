import React from 'react';
import { useFormik } from 'formik';
import './Contact.css'
import Footer from './Footer'

function Contact() {
  
  const SignupForm = () => {
    const formik = useFormik({
      initialValues: {
        name:'',
        email: '',
        message:''
      },
     
    });
    return (
      <form onSubmit={formik.handleSubmit}>

<label htmlFor="name" className="form-label">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label htmlFor="email" className="form-label">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.email}
        />


<label htmlFor="msg" className="form-label">message</label>
<textarea class="form-control" id="msg" rows="3"   name="name"
          type="text"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.msg}></textarea>


        <button type="submit" className="btn btn-success m-3">Send</button>
      </form>
    );
  }

  // Return the SignupForm component here
  return (
    <div className='contactbg'>
      <h1 className='text-center text-danger mb-5 mb-lg-5'>Contact Page</h1>

      <div className="card mb-3 w-75 mx-auto shadow-lg border border-danger border-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src="/image/contact.jpg" className="card-img rounded-start h-100" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <SignupForm />
       </div>
    </div>
  </div>
</div>
<div className='container text-center mt-5'><h4>OR Text Me At</h4> <a href="www.gmail.com" className='text-dark fs-3 fw-bold text-decoration-underline'>ibrahimfaizal1985@gmail.com</a><br />
<h4 className='mt-3'> OR Call Me  <b>638xxx1838</b></h4> </div>
<Footer></Footer>

    </div>
  );
}

export default Contact;
