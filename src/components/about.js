import React from "react";
import { Container } from 'react-bootstrap';

const Abt = (props) => {
  return (
    <>

      {/* <p className="about">{props.lines}</p>
     <img src={props.imgsrc} alt="..." /> */}
     <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-md-6 text-center">
          <h2 id="aboutus"className='abtus-heading'>About Us</h2>
          <p className="abtus-para">
            <Container className="">
              <div className="container-fluid abtus-para1">
             We, Scrapbuyer, situated at UAE are well-established scrap buyers. We have earned a reputation through our hard work, dedication, friendly and courteous services. We specialise in various scrap buying services and help our clients fetch the best value for the scrap. We are committed to providing our clients premium quality, cost-effective, credible and timely execution of our services.
               </div>
           </Container>
          </p>
        </div>
        <div className="col-md-6 p-0 d-flex justify-content-center align-items-center">
        <img src={props.imgsrc} className="abtus-img " alt="..." />
        </div>
      </div>
      </div>
    </>
  )
}
export default Abt;