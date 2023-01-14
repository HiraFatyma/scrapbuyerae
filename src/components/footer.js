import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaFacebookSquare} from 'react-icons/fa';
import {AiFillTwitterSquare} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' 
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { faLinkedin } from "@fortawesome/free-solid-svg-icons";

class Foot extends Component{
  render(){
  return(
    <>
      <footer className="">
        <div className="container mt-5">
          
       <div class="row d-flex justify-content-between m-5 mb-2">
                <div className=" col-sm-12 col-md-3">
                  <h5>USEFUL LINKS</h5>
                  <ul>
                    <li>HOME</li>
                    <li>SERVICES</li>
                    <li>GALLERY</li>
                    <li>TESTIMONIALS</li>
                  </ul>
                </div>
                <div className=" col-sm-12 col-md-3">
                  <ul>
                    <li>ABOUT US</li>
                    <li>VIDEOS</li>
                    <li>CONTACT US</li>
                  </ul>

                  </div>
                <div className=" col-sm-12 col-md-3">
                 <ul>
                  <li>CONTACT US</li>
                  <li>Ajman UAE</li>
                  <li>5454545</li>
                  <li>contact@mysites.com</li>
                  <li>+971-8888888888</li>
                  
                 </ul>
                </div>

                <div className=" col-sm-12 col-md-3">
                 <ul>
                  
                  <li>CONNECT</li>
                  <FaFacebookSquare className="my-icons"/><span><AiFillTwitterSquare className="my-icons"/></span><span><AiFillLinkedin className="my-icons"/></span>
                 
    
                  
                 </ul>
                </div>
               
              </div>
              
             </div>
             <div className="row mx-0 footer-bg">
                <div className="col-md-6 ">
                <p className="mt-3 mb-1 p-padding">© Copyrights 2023 Scrapbuyer. All Rights Reserved.</p>
                </div>
                <div className="col-md-6 ">
                  <p className="mt-3 mb-1 p-padding">Powered by: Digitech Infra Associates</p>

                </div>
             </div>
            </footer>
    </>
  )
  }
}
export default Foot;