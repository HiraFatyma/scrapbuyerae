import React from "react";
import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Row, Col, Button } from "reactstrap";
import ReCAPTCHA from "react-google-recaptcha";
import recycle from './images/image-12.png';
import srp from './images/image-11.png';



const Navbar = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand " href="#">
          <img className="re1" src={recycle} />
          <img className="re1" src={srp} />
          <span className="logo-text">SB</span>
        </a>
       
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto  mb-2 mb-lg-0 ms-lg-5">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="./index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutus">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#videos">
                Videos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">
                Testimonials
              </a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#cont">Contact Us</a>
            </li>
           
          </ul>
        </div>

      </nav>
      <Modal
                size="md"
                isOpen={modal}
                toggle={() => setModal(!modal)}>
                <ModalHeader
                    toggle={() => setModal(!modal)}>

                </ModalHeader>

                <ModalBody>
                    <form>
                        <h3 className="enquiry">Send Enquiry</h3>
                        <p className="b-enquiry">Write to us for any business enquiries</p>
                        <Row className="myform">
                            <div className="col mycol" lg={12}>
                                <div>
                                    <label htmlFor='name'>
                                        Name<span style={{Color:'red'}}>*</span>
                                    </label>
                                    <input required type='text'
                                        className='form-control'
                                        placeholder='Enter your Name'
                                        name='name'>


                                    </input>

                                </div>
                            </div>

                            <Col className="mycol" lg={12}>
                                <div>
                                    <label htmlFor='mobnumber'>
                                        Mobile Number
                                    </label>
                                    <input required
                                        type='tel'
                                        className='form-control'
                                        placeholder='Enter Mobile Number'
                                        name='mobnumber'>


                                    </input>

                                </div>
                            </Col>

                            <Col className="mycol" lg={12}>
                                <div>
                                    <label htmlFor='email'>
                                        E-mail <span style={{Color:'red'}}>*</span>
                                    </label>
                                    <input
                                        type='e-mail'
                                        className='form-control'
                                        placeholder='contact@mysites'
                                        name='email'>


                                    </input>

                                </div>
                            </Col>
                            <Col className="mycol" lg={12}>
                                <div>
                                    <label htmlFor='message'>
                                        Message
                                    </label>
                                    <textarea required
                                        type='text'
                                        className='form-control'
                                        placeholder=''
                                        name='message'
                                        rows='5' 
                                        columns='40' >
                                        


                                    </textarea>

                                </div>
                            </Col>
                            <ReCAPTCHA 
                             sitekey="6LcsaukjAAAAAPnvSgY1JsnQwoJFN2byMi3YBiIe"
                            />
                            <input
                                style={{
                                    backgroundColor: '#AC997C',
                                    color: '#FFFFFF',
                                    opacity: 1,
                                    padding: '10px 50px',
                                    borderRadius: '0.25rem',
                                    marginTop: '10px',
                                    textAlign: 'center',
                                    border: '1px solid transparent',
                                    borderColor: '#AC997C',
                                    float: 'right'
                                }}
                                type="submit"
                                value="Submit"
                            />
                        </Row>
                    </form>
                </ModalBody>
            </Modal>
      <div className="full-img">
        <div className="all-in-1">
          <h3 className="pioneers">Pioneers in</h3>
          <h3 className="pioneers2">Scrap Buying Services</h3>
          <button onClick={() => setModal(true)} className="btn btn-primary2">Enquire Now</button>
        </div>
      </div>
       
    </>
  )
}
export default Navbar;