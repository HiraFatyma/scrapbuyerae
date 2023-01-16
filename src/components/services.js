import React from "react";
import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Row, Col, Button } from "reactstrap";
import ReCAPTCHA from "react-google-recaptcha";

const Card = (props) => {
    const [modal, setModal] = useState(false);
    return (
        <>
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


            <div className="card mb-5 border-0 ">
                <img src={props.imgsrc} className="image-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text text-center">{props.descrip}</p>
                    <button onClick={() => setModal(true)} className="btn btn-primary">Enquire Now</button>
                    

                </div>
            </div>
        </>
    )
}
export default Card;