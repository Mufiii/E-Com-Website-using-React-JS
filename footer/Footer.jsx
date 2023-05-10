import React from 'react'
import './Footer.scss'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaTwitter } from 'react-icons/fa';


function Footer() {
  return (
    <div >
      
<footer>

  <section style={{backgroundColor:"yellow"}}>
    <div className="container text-center text-md-start mt-5">

      <div className="row mt-3">
   
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
  
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-secondary mb-2"></i>Baby Den
          </h6>
          <p>
              (123) 456-78-91096 <br /><br />
              Ernser Vista Suite 437, NY <br />
              Info.rahman@gmail.com
          </p>
          <div class="social-links">
              <i className="FaTwitter"></i>
              <i className="AiFillFacebook"></i>
              <i className="FaInstagramSquare"></i>
              <i className="FaYoutube"></i>
              <i className="AiFillLinkedin"></i>
          </div>
        </div>

   
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto ">
     
          <h6 className="text-uppercase fw-bold mb-2">
            Catogories
          </h6>
          <p>
            <a href="#!" className="text-reset">Clothing & Fashion</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Toys</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Bath & Skin Care</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Baby Diapering</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Nursery</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Baby Gear</a>
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
   
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
     
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
   
          <h6 className="text-uppercase fw-bold mb-4">Subscribe Our Newsletter</h6>
          {/* <p><i className="fas fa-home me-3 text-secondary"></i> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3 text-secondary"></i>
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3 text-secondary"></i> + 01 234 567 89</p> */}
           <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Your Email Address"
              className="me-2"
              aria-label="Search"   
            />
            <Button variant="outline-warning">Subscribe</Button>
          </Form>
        </div>
    
      </div>
  
    </div>
  </section>

  
 
</footer>

    </div>
    
  )
}

export default Footer