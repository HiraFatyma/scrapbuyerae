import React from "react";
import location from './images/image-21.png';
import emails from './images/image-22.png';
import calls from './images/image-23.png';
import time from './images/image-24.png';

const Cont= (props)=>{
    return(
        <>
        <h2 id="cont" className="contactus mb-5">Contact Us</h2>
        <div className="container">
            <div className="row d-flex justify-content-center">
        <div className="col-md-6">
        <ul>
            <li><img src={location} className="loc-pic" /><span className='big'>Our Office Address</span></li>
            <li><span className='small'> Ajman, UAE 5446</span></li>
            <li><img src={emails} className="email-pic" /><span className='big'>General Enquiries</span></li>
            <li><span className='small'> contact@mysites.com</span></li>
            <li><img src={calls} className="call-pic" /><span className='big'>Call Us</span></li>
            <li><span className='small'> +971-8888888888</span></li>
            <li><img src={time} className="time-pic" /><span className='big'>Our Timing</span></li>
            <li><span className='small'> 09:00 AM - 09:00 PM</span></li>
           
        </ul>
        </div>
        <div className="col-md-3">
        <input
                                        type='text'
                                        className='form-control'
                                        placeholder='YOUR NAME'
                                        name='name'>


                                    </input>
                                    <input
                                        type='e-mail'
                                        className='form-control'
                                        placeholder='YOUR E-MAIL'
                                        name='email'>


                                    </input>
                                    <input
                                        type='number'
                                        className='form-control'
                                        placeholder='YOUR CONTACT NO'
                                        name='number'>


                                    </input>
                                    <input
                                        type='message'
                                        className='form-control'
                                        placeholder='YOUR MESSAGES'
                                        name='message'>


                                    </input>
                                    <div className="row d-flex justify-content-center align-content-center mt-3">
                                    <a class="btn btn-primary3" href="#" role="button">Submit</a>
                                    </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default Cont;